const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema(
  {
    alertName: {
      type: String,
      required: true,
      trim: true,
    },

    imei: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    alerts: {
      powerConnected: { type: Boolean, default: false },
      powerDisconnected: { type: Boolean, default: false },
      geofence: { type: Boolean, default: false },
      speed: { type: Boolean, default: false },
      battery: { type: Boolean, default: false },
      dtc: { type: Boolean, default: false },
    },

    speedConfig: {
      enabled: { type: Boolean, default: false },
      maxSpeed: {
        type: Number,
        required: function () {
          return this.speedConfig.enabled === true;
        },
      },
    },

    batteryConfig: {
      enabled: { type: Boolean, default: false },
      minVoltage: {
        type: Number,
        required: function () {
          return this.batteryConfig.enabled === true;
        },
      },
    },

    emails: {
      type: [String],
      validate: {
        validator: (v) => v.length <= 5,
        message: "You can add maximum 5 email addresses.",
      },
    },

    mobiles: {
      type: [String],
      validate: {
        validator: (v) => v.length <= 5,
        message: "You can add maximum 5 mobile numbers.",
      },
    },

    notes: {
      type: String,
      default: "",
    },

    alertFlags: {
      speedAlertSent: { type: Boolean, default: false },
      batteryAlertSent: { type: Boolean, default: false },
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Alert", AlertSchema);
