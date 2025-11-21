const logger = require('../utils/logger');
const Device = require('../models/device.model');
const Group = require('../models/group.model');
const Firmware = require('../models/firmware.model');
const Setting = require('../models/settings.model');
const startOtaRequestService = require('../middlewares/otaPacketRequest');
const allPacketsDef = require('../utils/packetDef');

function deviceCommutionHandler(client) {
  startOtaRequestService(client);
  DeviceInitReq(client);
  parsePacket(client);
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
      const firmware = await Firmware.findById(group.fwId).lean().exec();
      if (!firmware) {
        logger.error("Firmware not found for Firmware ID:", group.firmwareId);
        return;
      }
      switch (request) {

        case "get_fw":

          const firm_res = `<id=${firmware.firmId},sw=${firmware.swVersion}>`;
          client.publish(device_imei, JSON.stringify(firm_res), { qos: 2 });
          logger.info(`Response sent to device: ${JSON.stringify(firm_res)}`);
          break;

        case "get_st_file":

          const setting_data = await Setting.findById(group.settings).lean().exec();
          const st_res = `<Id=${setting_data.settingId},breadcrumb=${setting_data.breadcrumb},hbt=${setting_data.hbt},stop=${setting_data.stop},sleep=${setting_data.sleep},minSpeedKph=${setting_data.moveTrigger.minSpeedKph},speedCount=${setting_data.moveTrigger.speedCount},minDistanceM=${setting_data.moveTrigger.minDistanceM},deviceTimeout=${setting_data.resetTimeouts.deviceTimeout},gpsTimeout=${setting_data.resetTimeouts.gpsTimeout},cellularTimeout=${setting_data.resetTimeouts.cellularTimeout},ip=${setting_data.dashboardServer.ip},port=${setting_data.dashboardServer.port}>`;
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
      const middleHex = packetHex.slice(20, -4);         // exclude imei(8B)=16 hex + packetSize(2B)=4 hex
      const middleBytes = Buffer.from(middleHex, "hex");

      // Sum all middle bytes
      let checksumSum = 0;
      for (const b of middleBytes) checksumSum += b;
      checksumSum &= 0xffff;

      const computedHex = checksumSum.toString(16).padStart(4, "0");
      const checksumPacketHex = packetHex.slice(-4);

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
          .slice(offset, offset + bytes)
          .toString("hex");

        parsed[field] = def.parser(rawHex); // use new parser function
        offset += bytes;
      }

      logger.info(`Parsed Packet Data: ${JSON.stringify(parsed)}`);
    } catch (err) {
      logger.error("Error parsing packet:", err);
    }
  });
}


function hexToBytes(hex) {
  const bytes = [];
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16));
  }
  return bytes;
}

module.exports = deviceCommutionHandler;