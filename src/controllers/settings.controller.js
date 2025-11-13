// controllers/setting.controller.js
const Setting = require('../models/settings.model');
const logger = require('../utils/logger');

/**
 * Create a new setting file
 */
exports.createSetting = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.settingId || !payload.name) {
      return res.status(400).json({ status: false, message: 'settingId and name are required' });
    }

    const exists = await Setting.findOne({ settingId: payload.settingId });
    if (exists) {
      return res.status(409).json({ status: false, message: 'settingId already exists' });
    }

    const created = new Setting(payload);
    const saved = await created.save();
    return res.status(201).json({ status: true, message: 'Setting created successfully', data: saved });
  } catch (err) {
    logger.error('Create setting error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

/**
 * Get all settings
 */
exports.getAllSettings = async (req, res) => {
  try {
    const list = await Setting.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ status: true, data: list });
  } catch (err) {
    logger.error('Get all settings error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

/**
 * Get single setting by Mongo _id
 */
exports.getSettingById = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Setting.findById(id).lean();
    if (!doc) return res.status(404).json({ status: false, message: 'Setting not found' });
    return res.status(200).json({ status: true, data: doc });
  } catch (err) {
    logger.error('Get setting by id error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

/**
 * Update a setting (partial or full)
 * PUT /api/v1/settings/:id
 */
exports.updateSetting = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const existing = await Setting.findById(id);
    if (!existing) return res.status(404).json({ status: false, message: 'Setting not found' });

    // compute shallow changes and apply
    const keys = ['settingId','name','breadcrumb','hbt','stop','sleep','moveTrigger','qualityFilter','resetTimeouts','dashboardServer','flag','group','extra'];
    let mutated = false;
    for (const k of keys) {
      if (typeof payload[k] !== 'undefined') {
        const from = existing.get(k);
        const to = payload[k];
        if (JSON.stringify(from) !== JSON.stringify(to)) {
          existing.set(k, to);
          mutated = true;
        }
      }
    }

    if (!mutated) {
      return res.status(200).json({ status: true, message: 'No changes detected', data: existing });
    }

    const saved = await existing.save();
    return res.status(200).json({ status: true, message: 'Setting updated', data: saved });
  } catch (err) {
    logger.error('Update setting error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

/**
 * Delete a setting
 */
exports.deleteSetting = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Setting.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ status: false, message: 'Setting not found' });
    return res.status(200).json({ status: true, message: 'Setting deleted' });
  } catch (err) {
    logger.error('Delete setting error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};
