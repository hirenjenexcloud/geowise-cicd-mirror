// src/server.js
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db.config');
const logger = require('./utils/logger');
const mqttConfig = require('./config/mqtt.config');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/geotracker';

const server = http.createServer(app);

async function start() {
  try {
    await connectDB(MONGO_URI);
    server.listen(PORT, () => {
      logger.info(`GeoTracker server listening on port ${PORT}`);
       logger.info(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    logger.error('Failed to start server', err);
    process.exit(1);
  }
}

start();

// graceful shutdown
process.on('SIGINT', () => {
  logger.info('SIGINT received. Shutting down.');
  process.exit(0);
});
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down.');
  process.exit(0);
});
