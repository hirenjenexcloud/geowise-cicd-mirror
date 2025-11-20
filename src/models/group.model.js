const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  grpName: { type: String, required: [true,"Group name is required."], trim: true },
  fwId: { type: mongoose.Schema.ObjectId ,required: [true,"Firmware version is required."] },
  settings: { type: mongoose.Schema.ObjectId, required:[true, "Setting is required."]},
  hwVersion: { type: String, required: [true,"Hardware version is required."] },
  desc: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
