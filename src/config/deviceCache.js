const LRU = require('lru-cache');
const AlertData = require('../models/alert.model');
 
const DAY_MS = 24 * 60 * 60 * 1000;
 
const cache = new LRU.LRUCache({
  max: 5000,
  ttl: DAY_MS
});
 
async function getDeviceConfig(imei) {
    if (cache.has(imei)) return cache.get(imei);
    const config = await AlertData.findOne({ imei });
    if (!config) {
        console.log("No config found for IMEI:", imei);
        return null;
    }
    cache.set(imei, config);
    return config;
}
 
function updateDeviceConfigInCache(newConfig) {
  if (!newConfig) return;
  console.log(`Cache updated for IMEI ${newConfig.imei}`);
  newConfig.__updatedAt = Date.now();
  cache.set(newConfig.imei, newConfig, { ttl: DAY_MS });
}
 
module.exports = { getDeviceConfig, updateDeviceConfigInCache };