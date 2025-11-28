/**
 * middlewares/otaPacketRequest.js
 *
 * Listens for device requests on:
 *   ota/request/<folderId>/<packetNumber>
 *
 * On request:
 *   - reads uploads/<folderId>/packet<packetNumber>.bin
 *   - publishes binary packet to: ota/packet/<folderId>/<packetNumber>
 *   - on error, publishes JSON to: ota/response/<folderId>/<packetNumber>
 *
 * The response JSON includes deviceId and requestId if present so device can correlate.
 */

const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');            
const UPLOADS_ROOT = path.join(__dirname, "..", "uploads");

module.exports = function startOtaRequestService(client) {
  if (!client) {
    logger.error("MQTT client unavailable. OTA service aborted.");
    return;
  }
  // Handle OTA Request
  client.on("message", async (topic, rawMessage) => {
    try {
      if (topic !== 'otaupdate') return; 

      const payload = safeParseJson(rawMessage);
      if (!payload) {
        logger.warn("Invalid JSON payload in OTA request");
        return;
      }
      const { imei, fId, packet_no } = payload;
      if (!imei || !fId || typeof packet_no !== "number") {
        logger.warn("Missing required OTA fields", payload);
        return;
      }

      logger.info(`OTA Request → IMEI=${imei}, fId=${fId}, packet=${packet_no}`);
      // Build Packet Path
      const packetPath = path.join(UPLOADS_ROOT, String(fId), `packet${packet_no}.bin`);
      const data = await fs.promises.readFile(packetPath);
      const device_imei = imei.toString();
      client.publish(device_imei, data, { qos: 2 }, (err) => {
        if (err) {
          logger.error("Failed to publish OTA packet:", err);
         logger.error(client, imei, `Publish failed for packet ${packet_no}`);
          return;
        }
        logger.info(
          `OTA Packet sent → IMEI=${imei}, fId=${fId}, packet=${packet_no}, bytes=${data.length}`
        );
      });

    } catch (err) {
      logger.error("Error processing OTA update:", err);
    }
  });
};

function safeParseJson(msg) {
  try {
    return JSON.parse(msg.toString());
  } catch (e) {
    return null;
  }
}

// function publishError(client, imei, errorMsg) {
//   const errPayload = JSON.stringify({
//     status: "error",
//     imei,
//     error: errorMsg,
//     time: new Date().toISOString(),
//   });
// logger.err(`OTA error to IMEI=${errPayload}`);
// }


// module.exports = startOtaRequestService;
