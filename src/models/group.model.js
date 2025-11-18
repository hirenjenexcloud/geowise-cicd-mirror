const { required } = require('joi');
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  grpName: { type: String, required: true, trim: true },
  fwVersion: { type: String, required: true },
  settings: { type: mongoose.Schema.ObjectId, required:true},
  hwVersion: { type: String, required: true },
  desc: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
