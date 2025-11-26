const mongoose = require('mongoose');

const FirmwareSchema = new mongoose.Schema({

    fwId: {
      type: Number,
      required: true,
      unique: true,
      index: true
    },
    firmName: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    swVersion: {
        type: String,
        required: [true, "S/W version is required"],
    },


}, { timestamps: true });

module.exports = mongoose.model('firmware', FirmwareSchema);
