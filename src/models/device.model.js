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

const DeviceSchema = new mongoose.Schema(
  {
  
    imei: {
      type: String,
      required: [true, 'IMEI is required'],
      trim: true,
      unique: true,
      minlength: [15, 'IMEI must be at least 15 characters'],
    },
    imsi: {
      type: String,
      required: [true, 'IMSI is required'],
      unique: true,
      trim: true,
      
    },
    iccid: {
      type: String,
      required: [true, 'ICCID is required'],
      trim: true

    },
    msisdn: {
      type: String,
      required: [true, 'MSISDN is required'],
      trim: true
    },
    carrier: {
      type: String,
      required: [true, 'Carrier is required'],
      trim: true
    },
    grpId:{type: mongoose.Schema.Types.ObjectId},
    swVersion: {type: String, default: ''},
    hwVersion: {type: String, default: ''},
    eType: { type: Number},
    location: { type: locationSchema},
    power: { type: powerSchema},
    engine: { type: engineSchema},
    fuel: { type: fuelSchema},
    temperature: {oil: { type: Number}},
  },
  {
    timestamps: true, 
    versionKey: false,
  }
);
DeviceSchema.index({ imei: 1 });

module.exports = mongoose.model('DeviceData', DeviceSchema,'device_data');
