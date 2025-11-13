// models/settings.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DashboardServerSchema = new Schema({
  ip: { type: String, default: '' },
  port: { type: Number, default: 0 }
}, { _id: false });

const MoveTriggerSchema = new Schema({
  minSpeedKph: { type: Number, default: 0 },
  speedCount: { type: Number, default: 0 },
  minDistanceM: { type: Number, default: 0 }
}, { _id: false });

const QualityFilterSchema = new Schema({
  minSatellite: { type: Number, default: 0 },
  stopHAC: { type: Number, default: 0 },
  moveHAC: { type: Number, default: 0 },
  gsmRssi: { type: Number, default: 0 }
}, { _id: false });

const ResetTimeoutsSchema = new Schema({
  deviceSecs: { type: Number, default: 0 },
  gpsSecs: { type: Number, default: 0 },
  cellularSecs: { type: Number, default: 0 }
}, { _id: false });

const SettingSchema = new Schema({
  settingId: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  breadcrumb: { type: Number, default: 0 },

  hbt: { type: Number, default: 0 },
  stop: { type: Number, default: 0 },
  sleep: { type: Number, default: 0 },

  moveTrigger: { type: MoveTriggerSchema, default: () => ({}) },
  qualityFilter: { type: QualityFilterSchema, default: () => ({}) },
  resetTimeouts: { type: ResetTimeoutsSchema, default: () => ({}) },
  dashboardServer: { type: DashboardServerSchema, default: () => ({}) },

  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  flag: { type: Boolean, default: false },

  extra: { type: Schema.Types.Mixed, default: {} }
}, { timestamps: true });

SettingSchema.index({ settingId: 1 }, { unique: true });
SettingSchema.index({ 'dashboardServer.ip': 1 });

module.exports = mongoose.model('Setting', SettingSchema);
