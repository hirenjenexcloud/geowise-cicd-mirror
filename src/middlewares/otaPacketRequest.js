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

const mqttClient  = require('../config/mqtt.config');

const UPLOADS_ROOT = path.join(__dirname, '..', 'uploads');
const REQUEST_TOPIC = 'ota/request/+/+';     // ota/request/<folderId>/<packetNumber>
const PACKET_PUBLISH_TOPIC = (folderId, packetNumber) => `ota/packet/${folderId}/${packetNumber}`;
const RESPONSE_TOPIC = (folderId, packetNumber) => `ota/response/${folderId}/${packetNumber}`;

const MAX_PACKET_BYTES = 5 * 1024 * 1024;

function safeParseJson(buf) {
  try {
    return JSON.parse(buf.toString());
  } catch (e) {
    return null;
  }
}

function publishError(client,folderId, packetNumber, err, requestMeta = {}) {
  const topic = RESPONSE_TOPIC(folderId, packetNumber);
  const payload = {
    status: 'error',
    message: err.message || String(err),
    folderId,
    packetNumber: Number(packetNumber)
  };
  try {
    client.publish(topic, JSON.stringify(payload), { qos: 1 }, (pubErr) => {
      if (pubErr) logger.error('Error publishing OTA error response:', pubErr);
    });
  } catch (e) {
    logger.error('Failed to publish error response:', e);
  }
}

// Subscribe once client is ready
function startOtaRequestService(client) {

  if (!client) {
    logger.error('MQTT client not available from config. Aborting OTA request service.');
    return;
  }

  client.subscribe(REQUEST_TOPIC, { qos: 1 }, (err, granted) => {
    if (err) {
      logger.error('Failed to subscribe to OTA request topic:', err);
      return;
    }
    logger.info(`OTA request service subscribed to ${REQUEST_TOPIC}`);
  });

  client.on('message', async (topic, message) => {
    try {
      if (!topic.startsWith('ota/request/')) return;

      // topic format: ota/request/<folderId>/<packetNumber>
      const parts = topic.split('/');
      if (parts.length < 4) {
        logger.warn('Received malformed OTA request topic:', topic);
        return;
      }
      const folderId = parts[2];
      const packetNumber = parts[3];
      const meta = safeParseJson(message) || {};
      const deviceId = meta.deviceId || null;
      const requestId = meta.requestId || null;

      logger.info(`OTA request received: folder=${folderId} packet=${packetNumber} device=${deviceId || 'unknown'}`);

      if (!/^\d+$/.test(folderId) || !/^\d+$/.test(packetNumber)) {
        const err = new Error('Invalid folderId or packetNumber (must be digits)');
        publishError(client,folderId, packetNumber, err);
        return;
      }

      const pktPath = path.join(UPLOADS_ROOT, folderId, `packet${packetNumber}.bin`);
      if (!fs.existsSync(pktPath)) {
        const err = new Error('Packet not found');
        publishError(client,folderId, packetNumber, err);
        logger.warn(`Packet not found: ${pktPath}`);
        return;
      }

      const data = await fs.promises.readFile(pktPath);

      if (!Buffer.isBuffer(data) || data.length === 0) {
        const err = new Error('Empty packet');
        publishError(client,folderId, packetNumber, err);
        return;
      }
      if (data.length > MAX_PACKET_BYTES) {
        const err = new Error('Packet too large');
        publishError(client,folderId, packetNumber, err);
        return;
      }

      const outTopic = PACKET_PUBLISH_TOPIC(folderId, packetNumber);

      client.publish(outTopic, data, { qos: 1 }, (pubErr) => {
        if (pubErr) {
          logger.error(`Failed to publish packet ${folderId}/${packetNumber}:`, pubErr);
          publishError(client,folderId, packetNumber, pubErr);
          return;
        }

        logger.info(`Published packet ${folderId}/${packetNumber} -> ${outTopic} (${data.length} bytes)`);
        if (deviceId || requestId) {
          const respTopic = RESPONSE_TOPIC(folderId, packetNumber);
          const respPayload = {
            status: 'ok',
            folderId,
            packetNumber: Number(packetNumber),
            bytes: data.length,
            deviceId,
            requestId,
            time: new Date().toISOString()
          };
          client.publish(respTopic, JSON.stringify(respPayload), { qos: 1 }, (rErr) => {
            if (rErr) logger.error('Failed to publish response ack:', rErr);
          });
        }
      });

    } catch (err) {
      logger.error('Error handling OTA request message:', err);
      // best-effort response if possible
      try {
        const parts = topic.split('/');
        const folderId = parts[2] || 'unknown';
        const packetNumber = parts[3] || '0';
        publishError(client,folderId, packetNumber, err, {});
      } catch (e) {
        logger.error('Failed to publish error response after exception', e);
      }
    }
  });
}

module.exports = { startOtaRequestService };
