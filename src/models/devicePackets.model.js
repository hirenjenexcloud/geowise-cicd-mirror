const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    lat: { type: Number },
    long: { type: Number },
    hac: { type: Number },
    satellites: { type: Number },
    rssi: { type: Number }
  },
  { _id: false }
);

const powerSchema = new mongoose.Schema(
  {
    main: { type: Number },
    battery: { type: Number }
  },
  { _id: false }
);

const engineSchema = new mongoose.Schema(
  {
    spdKmph: { type: Number },
    rpm: { type: Number },
    odoMeter: { type: Number }
  },
  { _id: false }
);

const fuelSchema = new mongoose.Schema(
  {
    type: { type: Number },
    level: { type: Number }
  },
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    eType: { type: Number },
    eName: { type: String }
  },
  { _id: false }
);

const packetInfoSchema = new mongoose.Schema(
  {
    checksum: { type: Number },
    packetSize: { type: Number },
    seqNo: { type: Number },
    packet: { type: String }
  }
)

const devicePacketsSchema = new mongoose.Schema(
  {
    imei: { type: String, index: true },
    event: { type: eventSchema },
    packetInfo: { type: packetInfoSchema , select: false },
    location: { type: locationSchema },
    power: { type: powerSchema },
    engine: { type: engineSchema },
    fuel: { type: fuelSchema },
    temperature: { oil: { type: Number } }
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

devicePacketsSchema.index({ createdAt: 1 });
devicePacketsSchema.index({ 'data.imei': 1, createdAt: -1 });

module.exports = mongoose.model('devicePackets', devicePacketsSchema, 'device_packets');