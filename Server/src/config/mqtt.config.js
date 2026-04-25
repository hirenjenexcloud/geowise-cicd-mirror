const logger = require('../utils/logger');
const mqtt = require('mqtt');
const MQTT_HOST = process.env.MQTT_HOST || '0.0.0.0';
const MQTT_PORT = parseInt(process.env.MQTT_PORT || '1883', 10);
const mosca = require('mosca');
const deviceCommutionHandler = require('../controllers/deviceCommunication');



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
    if(packet.payload.toString() == "reboot") {
  logger.info("Mosca Published :", 'Topic:', packet.topic,',', 'Payload:', packet.payload.toString());
  }
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

const topics = {
                'devicereq':{qos:2},
                'carinfo': {qos:2},
                'tracking': {qos:2},
                'carcan': {qos:2},
                'deviceboot': {qos:2},
                'otaupdate': {qos:2}
              } 
                
client.on('connect', () => {
  logger.info('MQTT connected');

  deviceCommutionHandler(client);

   client.subscribe(topics, (err, granted) => {
    if (err) {
      console.error(' MQTT Subscribe error:', err);
    } else {
      console.log('Subscribed with QoS 2:', granted.map(g => g.topic));
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



module.exports = client;

