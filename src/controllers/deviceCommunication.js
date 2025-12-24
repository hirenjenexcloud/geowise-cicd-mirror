const logger = require('../utils/logger');
const Device = require('../models/device.model');
const Group = require('../models/group.model');
const Firmware = require('../models/firmware.model');
const Setting = require('../models/settings.model');
const startOtaRequestService = require('../middlewares/otaPacketRequest');
const allPacketsDef = require('../utils/packetDef');
const DevicePackets = require('../models/devicePackets.model');
const group = require('../controllers/group.controller');
const { getDeviceConfig } = require('../config/deviceCache');
const handlers = require('../middlewares/eventsHandlers');
const dtcCodes = require('../utils/dtcCode');

function deviceCommutionHandler(client) {
  startOtaRequestService(client);
  DeviceInitReq(client);
  parsePacket(client);
  group.setmqttClient(client);
  canPacketParseing(client);
}

function DeviceInitReq(client) {

  client.on('message', async (topic, message) => {

    if (topic !== 'devicereq') return;
    try {
      logger.info(`Message Received: Topic - devicereq  \n request - ${message.toString()}`);

      const payload = JSON.parse(message.toString());
      const { imei, request } = payload;
      const device_imei = imei.toString();
      if (!imei || !request) {
        logger.error("Invalid request: IMEI or requestType missing");
        return;
      }
      const device = await Device.findOne({ imei: imei }).lean().exec();
      if (!device) {
        logger.error("Device not found for IMEI:", imei);
        client.publish(imei, "DNR", { qos: 2 });
        logger.info(`Response sent to device: ${JSON.stringify(imei)} - DNR`);
        return;
      }
      if (!device.grpId) {
        logger.error(`Device IMEI ${imei} has no group assigned`);
        return;
      }
      const group = await Group.findById(device.grpId).lean().exec();
      if (!group || !group.fwId) {
        logger.error(`Group ${device.grpId} has no firmware assigned`);
        return;
      }
    
      switch (request) {

        case "get_fw":
          const firm_res = `<id=${group.fwId},sw=${group.swVersion},hw=${group.hwVersion}>`;
          client.publish(device_imei, JSON.stringify(firm_res), { qos: 2 });
          logger.info(`Response sent to device: ${JSON.stringify(firm_res)}`);
          break;

        case "get_st_file":

          const setting_data = await Setting.findOne({settingId:group.settingId}).lean().exec();
          const st_res = `<Id=${setting_data.settingId},breadcrumb=${setting_data.breadcrumb},hbt=${setting_data.hbt},stop=${setting_data.stop},sleep=${setting_data.sleep},minSpeedKph=${setting_data.moveTrigger.minSpeedKph},speedCount=${setting_data.moveTrigger.speedCount},minDistanceM=${setting_data.moveTrigger.minDistanceM},minSatellite=${setting_data.qualityFilter.minSatellite},stopHac=${setting_data.qualityFilter.stopHac},moveHac=${setting_data.qualityFilter.moveHac},gsmRssi=${setting_data.qualityFilter.gsmRssi},deviceTimeout=${setting_data.resetTimeouts.deviceTimeout},gpsTimeout=${setting_data.resetTimeouts.gpsTimeout},cellularTimeout=${setting_data.resetTimeouts.cellularTimeout},ip=${setting_data.dashboardServer.ip},port=${setting_data.dashboardServer.port}>`;
          client.publish(device_imei, JSON.stringify(st_res), { qos: 2 });
          logger.info(`Response sent to device: ${JSON.stringify(st_res)}`);
          break;

        default:

          logger.warn(`Unknown request type: ${request}`);
          client.publish(imei.toString(), `<error=unknown_request>`, { qos: 2 });
          break;
      }

    } catch (err) {
      logger.error("Error handling device request:", err);
    }
  });
}

function parsePacket(client) {
  client.on("message", async (topic, message) => {
    if (!["carinfo", "tracking", "deviceboot"].includes(topic)) return;

    try {
      logger.info(
        `Packet Received: Topic - ${topic}\nPacket - ${message.toString()}`
      );

      const packetHex = message.toString().trim();
      const packetBuffer = Buffer.from(packetHex, "hex");

      // ------------ CHECKSUM LOGIC ------------
      const middleHex = packetHex.substring(20, packetHex.length - 4);         // exclude imei(8B)=16 hex + packetSize(2B)=4 hex
      const middleBytes = Buffer.from(middleHex, "hex");

      // Sum all middle bytes
      let checksumSum = 0;
      for (const b of middleBytes) checksumSum += b;
      checksumSum &= 0xffff;

      const computedHex = checksumSum.toString(16).padStart(4, "0");
      const checksumPacketHex = packetHex.substring(packetHex.length - 4);

      if (computedHex !== checksumPacketHex) {
        logger.warn(
          ` Checksum mismatch: Expected ${computedHex}, Received ${checksumPacketHex}`
        );
        return; // stop parsing
      }

      logger.info(`Checksum valid: ${computedHex}`);

      // ------------ PACKET PARSING USING packetDef ------------
      let offset = 0;
      const parsed = {};

      for (const [field, def] of Object.entries(allPacketsDef.packetDef)) {
        const bytes = def.size;

        if (offset + bytes > packetBuffer.length) {
          logger.warn(`Packet too short to extract ${field}`);
          break;
        }

        const rawHex = packetBuffer
          .subarray(offset, offset + bytes)
          .toString("hex");

        parsed[field] = def.parser(rawHex);
        offset += bytes;
      }

      // logger.info(`Parsed Packet Data: ${JSON.stringify(parsed)}`);

      const devicePacket = buildDevicePacket(parsed, packetHex, true);
      const deviceData = buildDevicePacket(parsed, packetHex, false);

      const config = await getDeviceConfig(parsed.imei);
      // logger.info("car data config", config);

      await DevicePackets.create(devicePacket);
      logger.info("Car data saved successfully!");

      if (!config) {
        logger.warn(`No alert config found for IMEI ${parsed.imei}`);
        return;
      } else {
        const handler = handlers[devicePacket.event.eType];
        if (handler) handler(deviceData, config);
        else console.log("Ignored event type:", devicePacket.event.eType);
      }

      const exists = await Device.findOneAndUpdate(
        { imei: devicePacket.imei },
        { $set: deviceData },
        { new: true }
      ).exec();
      if (!exists) {
        logger.warn(`Device with IMEI ${devicePacket.imei} not registered in DeviceData collection.`);
      } else {
        logger.info(`Device data for IMEI ${devicePacket.imei} updated successfully.`);
      }
       

    } catch (err) {
      logger.error("Error parsing packet:", err);
    }
  });
}

function canPacketParseing(client) {
  client.on("message", async (topic, message) => {
    if (!["carcan"].includes(topic)) return;

    try {
      logger.info(
        `Packet Received: Topic - ${topic}\nPacket - ${message.toString()}`
      );

      const packetHex = message.toString().trim();
      const packetBuffer = Buffer.from(packetHex, "hex");

      // ------------ CHECKSUM LOGIC ------------
      const middleHex = packetHex.substring(20, packetHex.length - 4);         // exclude imei(8B)=16 hex + packetSize(2B)=4 hex
      const middleBytes = Buffer.from(middleHex, "hex");

      // Sum all middle bytes
      let checksumSum = 0;
      for (const b of middleBytes) checksumSum += b;
      checksumSum &= 0xffff;

      const computedHex = checksumSum.toString(16).padStart(4, "0");
      const checksumPacketHex = packetHex.substring(packetHex.length - 4);

      if (computedHex !== checksumPacketHex) {
        logger.warn(
          ` Checksum mismatch: Expected ${computedHex}, Received ${checksumPacketHex}`
        );
        return; // stop parsing
      }

      logger.info(`Checksum valid: ${computedHex}`);

      // ------------ PACKET PARSING USING packetDef ------------
      let offset = 0;
      const parsed = {};

      for (const [field, def] of Object.entries(allPacketsDef.canPacketDef)) {
        const bytes = def.size;

        if (offset + bytes > packetBuffer.length) {
          logger.warn(`Packet too short to extract ${field}`);
          break;
        }

        const rawHex = packetBuffer
          .subarray(offset, offset + bytes)
          .toString("hex");

        parsed[field] = def.parser(rawHex);
        offset += bytes;
      }

      parsed["DTC"] = packetHex.substring(34 ,39);
      // logger.info(`DTC Parsed Packet Data: ${JSON.stringify(parsed)}`);

      const canPacket = buildCanDevicePacket(parsed, packetHex);

      await DevicePackets.create(canPacket);
      logger.info("Can data saved successfully!");

    } catch (err) {
      logger.error("Error parsing packet:", err);
    }
  });
}


function buildDevicePacket(parsed, packetHex, includePacketInfo) {
  const packet = {
    imei: parsed.imei,
    deviceData: {
      location: {
        lat: parsed.lat,
        long: parsed.lon,
        hac: parsed.hac,
        satellites: parsed.totalSat,
        rssi: parsed.rssi
      },
      power: {
        main: parsed.mainPower,
        battery: parsed.batteryPower
      },
      engine: {
        spdKmph: parsed.speed,
        rpm: parsed.rpm,
        odoMeter: parsed.odometer
      },
      fuel: {
        type: parsed.fuelType,
        level: parsed.fuelLevel
      },
      temperature: {
        oil: parsed.oilTemp
      }
    }
  };

  if (includePacketInfo) {
    packet.packetInfo = {
      checksum: parsed.checksum.toString(),
      packetSize: parsed.packetSize,
      seqNo: parsed.seqNumber,
      packet: packetHex.toString()
    };
    packet.event = {
      eType: parsed.eType,
      eName: allPacketsDef.eType[parsed.eType] || "Unknown",
    };
  } else {
      packet.deviceData.event = {
      eType: parsed.eType,
      eName: allPacketsDef.eType[parsed.eType] || "Unknown",
    };
  }

  return packet;
}

function buildCanDevicePacket(parsed, packetHex) {

  return packet = {
    imei: parsed.imei,
    DTC: true,
    event: {
      eType: parsed.eType,
      eName: allPacketsDef.eType[parsed.eType] || "Unknown",
    },
    packetInfo: {
      packetSize: parsed.packetSize,
      seqNo: parsed.seqNumber,
      packet: packetHex.toString()
    },
    canData: {
      code: parsed.DTC,
      info: dtcCodes.dtcCodes[parsed.DTC] || "Unknown",
      power: {
        main: parsed.mainPower,
        battery: parsed.batteryPower
      },
      rssi: parsed.rssi
    }
  };
}


module.exports = deviceCommutionHandler;