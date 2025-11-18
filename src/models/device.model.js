const mongoose = require('mongoose');


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
  },
  {
    timestamps: true, 
    versionKey: false,
  }
);
DeviceSchema.index({ imei: 1 });

module.exports = mongoose.model('DeviceData', DeviceSchema,'device_data');
