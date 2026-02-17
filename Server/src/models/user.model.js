// src/models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true, sparse: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  timezone: { type: String, required: true },
  password: { type: String, required: true },

  // Password reset fields
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
}, { timestamps: true , versionKey: false });

// Optionally add indexes, virtuals, methods later

module.exports = mongoose.model('User', userSchema);
