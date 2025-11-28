const LRU = require('lru-cache');
const DeviceData = require('../models/device.model');
 
const cache = new LRU.LRUCache({
  max: 5000,
  ttl: 60 * 1000 // 1 min TTL
});
 
 
async function getDeviceConfig(imei) {
    if (cache.has(imei)) return cache.get(imei);
 
    const config = await DeviceData.findOne({ imei });
 
    if (!config) {
        console.log("⚠️ No config found for IMEI:", imei);
        return null;
    }
 
    cache.set(imei, config);
    return config;
}
 
module.exports = { getDeviceConfig };