// controllers/setting.controller.js
const Setting = require("../models/settings.model");
const Counter = require("../models/counter.model");
const { success, fail } = require("../utils/apiResponse");

/**
 * Get next sequence value for a named counter (atomic)
 */
async function getNextSequence(name) {
  // findOneAndUpdate with upsert ensures counter exists and increments safely
  const updated = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean();
  return updated.seq;
}

exports.createSetting = async (req, res) => {
  try {
    const payload = { ...req.body };
    
    // Generate next settingId
    const nextId = await getNextSequence('settingId');
    payload.settingId = nextId;

    // minimal required validation via Mongoose will run on save
    const doc = new Setting(payload);
    const saved = await doc.save();

    return success(res, 'CREATED', 'Setting created');
  } catch (err) {
    // handle duplicate key unexpectedly
    if (err.name === 'MongoServerError' && err.code === 11000) {
      return fail(res, 'INVALIDSYNTAX', 'Duplicate key error', err.message);
    }
    return fail(res, 'INTERNALSERVERERROR', err.message);
  }
};

exports.getAllSettings = async (req, res) => {
  try {
    const list = await Setting.find({ is_deleted: false }).sort({ createdAt: -1 }).lean();
    return success(res, 'OK');
  } catch (err) {
    return fail(res, 'INTERNALSERVERERROR', err.message);
  }
};

exports.getSettingById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, 'INVALIDSYNTAX', 'Missing id param');
    const doc = await Setting.findById(id).lean();
    if (!doc) return fail(res, 'NOTFOUND', 'Setting not found');
    return success(res, 'OK');
  } catch (err) {
    return fail(res, 'INTERNALSERVERERROR', err.message);
  }
};

exports.updateSetting = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, 'INVALIDSYNTAX', 'Missing id param');

    // Do not allow client to change settingId — remove if present
    if (req.body.settingId) delete req.body.settingId;

    const updated = await Setting.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updated) return fail(res, 'NOTFOUND', 'Setting not found');
    return success(res, 'OK', 'Updated successfully');
  } catch (err) {
    // validation errors
    if (err.name === 'ValidationError') {
      return fail(res, 'INVALIDSYNTAX', 'Validation failed', err.message);
    }
    return fail(res, 'INTERNALSERVERERROR', err.message);
  }
};

exports.deleteSetting = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, 'INVALIDSYNTAX', 'Id not found');

    const existing = await Setting.findById(id);
    if (!existing) return fail(res, 'NOTFOUND', 'Setting not found');

    // BLOCK delete if assigned to a group
    if (existing.group) {
      return fail(res, 'INVALIDSYNTAX', 'Cannot delete setting file assigned to a group');
    }

    existing.is_deleted = true;
    await existing.save();

    return success(res, 'OK', 'Deleted');
  } catch (err) {
    return fail(res, 'INTERNALSERVERERROR', err.message);
  }
};
