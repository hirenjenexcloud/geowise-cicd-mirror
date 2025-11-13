const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  grpName: { type: String, required: true, trim: true },
  product: { type: String, required: true },
  fw_ver: { type: String, required: true },
  settings: { type: mongoose.Schema.ObjectId},
  hw_ver: { type: String, required: true },
  desc: { type: String, trim: true },
  status : { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
