const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true, trim: true },
  product: { type: String, required: true },
  firmware: { type: String, required: true },
  settings: { type: mongoose.Schema.ObjectId},
  hardwareVersion: { type: String, required: true },
  description: { type: String, trim: true },
  action: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
