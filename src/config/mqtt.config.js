const logger = require('../utils/logger');
const mqtt = require('mqtt');
const MQTT_HOST = process.env.MQTT_HOST || '0.0.0.0';
const MQTT_PORT = parseInt(process.env.MQTT_PORT || '1883', 10);
const mosca = require('mosca');


// ---- Mosca MQTT Broker Setup ----

const moscaSettings = {
 interfaces: [{ type: "mqtt", port: MQTT_PORT, host: MQTT_HOST }]
};

const server = new mosca.Server(moscaSettings);
const connectUrl1 = `mqtt://${MQTT_HOST}:${MQTT_PORT}`

logger.info("MOSCA connectUrl :-------", connectUrl1);

server.on('ready', () => {
    logger.info('Mosca MQTT broker is up and running');
});

server.on('published', (packet, client) => {
  if (!packet.topic.startsWith('$SYS')) {
    logger.info(`Message published via mosca: ${packet.topic} -> ${packet.payload.toString()}`);
  }
});

server.on('error', (err) => {
  logger.error('Mosca error:', err);
});


// ---- MQTT Client Setup ----

const MQTT_SERVER_IP = process.env.SERVER_IP || '127.0.0.1';
const connectUrl = `mqtt://${MQTT_SERVER_IP}:${MQTT_PORT}`;
logger.info("MQTT connectUrl :-------", connectUrl);

const client = mqtt.connect(connectUrl, {
  clean: true,
  connectTimeout: 60000,
  reconnectPeriod: 1000,
  cleanSession: true
});


// ---- Event Handlers ----

client.on('connect', () => {
  logger.info('MQTT connected');

  client.subscribe('geotracker/test', (err) => {
    if (err) {
      logger.error('MQTT subscribe error:', err);
    } else {
      logger.info('Subscribed to topic: geotracker/test');
    }
  });
});

client.on('reconnect', () => {
  logger.warn('MQTT reconnecting...');
});

client.on('close', () => {
  logger.warn('MQTT connection closed');
});

client.on('offline', () => {
  logger.warn('MQTT client went offline');
});

client.on('error', (err) => {
  logger.error('MQTT error:', err.message);
});

client.on('message', (topic, message) => {
  console.log("MQTT Message received");
  logger.info(`Message received: ${topic} -> ${message.toString()}`);
});



