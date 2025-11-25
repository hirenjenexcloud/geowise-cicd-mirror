// models/settings.model.js
const mongoose = require("mongoose");

const MoveTriggerSchema = new mongoose.Schema(
  {
    minSpeedKph: {
      type: Number,
      min: [0, "Speed cannot be negative"],
      default: 11,
    },
    speedCount: {
      type: Number,
      min: [0, "Speed Count cannot be negative"],
      default: 3,
    },
    minDistanceM: {
      type: Number,
      min: [0, "Distance cannot be negative"],
      default: 20,
    },
  },
  { _id: false }
);

const ResetTimeoutsSchema = new mongoose.Schema(
  {
    deviceTimeout: {
      type: Number,
      min: [0, "Device Timeout cannot be negative"],
      default: 86400,
      required: [true, "Device Timeout is required"],
    },
    gpsTimeout: {
      type: Number,
      min: [0, "GPS Timeout cannot be negative"],
      default: 600,
      required: [true, "GPS Timeout is required"],
    },
    cellularTimeout: {
      type: Number,
      min: [0, "Cellular Timeout cannot be negative"],
      default: 3600,
      required: [true, "Cellular Timeout is required"],
    },
  },
  { _id: false }
);

const DashboardServerSchema = new mongoose.Schema(
  {
    ip: { type: String, trim: true, default: "" },
    port: { type: Number, min: 0, max: 65535, default: 0 },
  },
  { _id: false }
);

const SettingSchema = new mongoose.Schema(
  {
    settingId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },

    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    breadcrumb: {
      type: Number,
      trim: true,
      min:[0, "Breadcrumb cannot be negative"],
      default: 20,
      required: [true, "Breadcrumb is required"],
    },

    hbt: {
      type: Number,
      min: [0, "Heartbeat cannot be negative"],
      default: 7200,
      required: [true, "Heartbeat is required"],
    },
    btHbt: {
      type: Number,
      min: [0, "Battery Heartbeat cannot be negative"],
      default: 14400,
      required: [true, "Battery Heartbeat is required"],
    },
    stop: {
      type: Number,
      min: [0, "Speed cannot be negative"],
      default: 150,
      required: [true, "Stop is required"],
    },
    sleep: {
      type: Number,
      min: [0, "Sleep cannot be negative"],
      default: 300,
      required: [true, "Sleep is required"],
    },

    moveTrigger: { type: MoveTriggerSchema, default: () => ({}) },
    resetTimeouts: { type: ResetTimeoutsSchema, default: () => ({}) },
    dashboardServer: { type: DashboardServerSchema, default: () => ({}) },

    // link to Group (if assigned). If present => cannot delete.
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      default: null,
    },
    atCommands: { type: [String], default: [] },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Setting", SettingSchema, "settings");
