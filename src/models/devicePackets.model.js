const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    hac: { type: Number, required: true },
    satellites: { type: Number, required: true },
    rssi: { type: Number, required: true }
  },
  { _id: false }
);
 
const powerSchema = new mongoose.Schema(
  {
    main: { type: Number, required: true },
    battery: { type: Number, required: true }
  },
  { _id: false }
);
 
const engineSchema = new mongoose.Schema(
  {
    spdKmph: { type: Number, required: true },
    rpm: { type: Number, required: true },
    odoMeter: { type: Number, required: true }
  },
  { _id: false }
);
 
const fuelSchema = new mongoose.Schema(
  {
    type: { type: Number, required: true },
    level: { type: Number, required: true }
  },
  { _id: false }
);
 
const devicePacketsSchema = new mongoose.Schema(
  {
    imei: { type: String, required: true, index: true },
    eType: { type: Number, required: true },
    packetInfo: {
      checksum: { type: Number, required: true },
      packetSize: { type: Number, required: true },
      seqNo: { type: Number, required: true },
      packet: { type: String, required: true }
    },
 
    location: { type: locationSchema, required: true },
    power: { type: powerSchema, required: true },
    engine: { type: engineSchema, required: true },
    fuel: { type: fuelSchema, required: true },
 
    temperature: {
      oil: { type: Number, required: true }
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);
 
devicePacketsSchema.index({ createdAt: 1 });
devicePacketsSchema.index({ 'data.imei': 1, createdAt: -1 });
 
module.exports = mongoose.model('devicePackets', devicePacketsSchema, 'device_packets');