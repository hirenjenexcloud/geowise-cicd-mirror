const mongoose = require('mongoose');


const DeviceSchema = new mongoose.Schema(
  {
    is_deleted:{
        type: Boolean,
        default: false
    },
    imei: {
      type: String,
      required: [true, 'IMEI is required'],
      trim: true,
      minlength: [12, 'IMEI must be at least 12 characters'],
    },
    imsi: {
      type: String,
      required: [true, 'IMSI is required'],
      unique: true,
      lowercase: true,
      trim: true,
      minlength: [10, 'IMSI must be at least 10 characters'],
      maxlength: [20, 'IMSI cannot exceed 20 characters'],
    },
    iccid: {
      type: String,
      required: [true, 'ICCID is required'],
      trim: true,
      minlength: [10, 'ICCID must be at least 10 characters'],
      maxlength: [25, 'ICCID cannot exceed 25 characters'],
    },
    msisdn: {
      type: String,
      required: [true, 'MSISDN is required'],
      trim: true,
      match: [/^\d{8,15}$/, 'MSISDN must be a valid  number'],
    },
    Pid: {
      type: String,
      required: [true, 'PID is required'],
      trim: true,
    },
    carrier: {
      type: String,
      required: [true, 'Carrier is required'],
      trim: true,
      enum: {
        values: ['Verizon', 'AT&T','POD','Global','Telit'],
        message: '{VALUE} is not a supported carrier',
      },
    },
  },
  {
    timestamps: true, 
    versionKey: false,
  }
);
DeviceSchema.index({ imei: 1 });

module.exports = mongoose.model('DeviceData', DeviceSchema,'device_data');
