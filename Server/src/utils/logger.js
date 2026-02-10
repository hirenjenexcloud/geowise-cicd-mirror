// src/utils/logger.js
// Simple console fallback logger (no external dependency)
const isDev = process.env.NODE_ENV !== 'production';

const logger = {
  info: (...args) => {
    console.log('[info]', ...args);
  },
  warn: (...args) => {
    console.warn('[warn]', ...args);
  },
  error: (...args) => {
    console.error('[error]', ...args);
  },
  debug: (...args) => {
    if (isDev) console.debug('[debug]', ...args);
  }
};

module.exports = logger;
