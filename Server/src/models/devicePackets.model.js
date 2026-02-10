const { bool } = require('joi');
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
    checksum: { type: String },
    packetSize: { type: Number },
    seqNo: { type: Number },
    packet: { type: String }
  },
  { _id: false }
)

const canDataSchema = new mongoose.Schema(
  {
    code: { type: String },
    info: { type: String },
    power: { type: powerSchema },
    rssi: { type: Number }
  },
  { _id: false }
)

const deviceDataSchema = new mongoose.Schema(
  {
    location: { type: locationSchema },
    power: { type: powerSchema },
    engine: { type: engineSchema },
    fuel: { type: fuelSchema },
    temperature: { oil: { type: Number } },
  },
  { _id: false }
)

const devicePacketsSchema = new mongoose.Schema(
  {
    imei: { type: String, index: true },
    DTC : {type: Boolean, default : false},
    event: { type: eventSchema },
    packetInfo: { type: packetInfoSchema , select: false },
    deviceData: { type: deviceDataSchema },
    canData: { type: canDataSchema }
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

devicePacketsSchema.index({ createdAt: 1 });
devicePacketsSchema.index({ 'imei': 1, createdAt: -1 });

module.exports = mongoose.model('devicePackets', devicePacketsSchema, 'device_packets');