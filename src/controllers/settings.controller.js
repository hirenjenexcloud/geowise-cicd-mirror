// controllers/setting.controller.js
const Setting = require("../models/settings.model");
const Counter = require("../models/counter.model");
const { success, fail } = require("../utils/apiResponse");
const { buildQuery } = require("../utils/queryBuilder");

/**
 * getNextSequence - atomic increment for named counter
 */
async function getNextSequence(name) {
  const updated = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean();
  return updated.seq;
}

/**
 * Create a new setting
 * Server assigns numeric settingId using counter
 */
exports.createSetting = async (req, res) => {
  try {
    const payload = { ...req.body };

    // Generate next settingId (server-side)
    const nextId = await getNextSequence("settingId");
    payload.settingId = nextId;

    // Create and save (Mongoose validators will run)
    const doc = new Setting(payload);
    const saved = await doc.save();

    return success(res, "CREATED", "Setting created");
  } catch (err) {
    // Duplicate key (unique index) handling
    if (err.name === "MongoServerError" && err.code === 11000) {
      return fail(res, "INVALIDSYNTAX", "Duplicate key error", err.message);
    }

    // Validation error (Mongoose)
    if (err.name === "ValidationError") {
      return fail(res, "INVALIDSYNTAX", "Validation failed", err.message);
    }

    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

/**
 * Get all settings
 */
exports.getAllSettings = async (req, res) => {
  try {
    const allowedFilters = {
      settingId: { type: "number" },
      group: { type: "string" },
      name: { type: "string" },
    };

    const { filter, pagination, sorting } = buildQuery(req, allowedFilters);

    const total = await Setting.countDocuments(filter);
    const settings = await Setting.find(filter)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .sort(sorting)
      .lean();

    return success(res, "OK", "Settings fetched successfully", {
      totalRecords: total,
      totalPages: Math.ceil(total / pagination.limit),
      currentPage: pagination.page,
      pageSize: pagination.limit,
      settings,
    });
  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};
/**
 * Get single setting by Settings Id
 */
exports.getSettingById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, "INVALIDSYNTAX", "Missing id param");

    const doc = await Setting.findById(id).lean();
    if (!doc) return fail(res, "NOTFOUND", "Setting not found");

    return success(res, "OK", "Setting fetched", doc);
  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

/**
 * Update a setting (partial)
 */
exports.updateSetting = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, "INVALIDSYNTAX", "Missing id param");

    // Do not allow client to change settingId
    if (req.body.settingId) delete req.body.settingId;

    const updated = await Setting.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updated) return fail(res, "NOTFOUND", "Setting not found");

    return success(res, "OK", "Updated successfully");
  } catch (err) {
    if (err.name === "ValidationError") {
      return fail(res, "INVALIDSYNTAX", "Validation failed", err.message);
    }
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

/**
 * Delete (soft-delete) a setting
 * Block deletion if assigned to a group
 */
exports.deleteSetting = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, "INVALIDSYNTAX", "Id not found");

    const existing = await Setting.findById(id);
    if (!existing) return fail(res, "NOTFOUND", "Setting not found");

    // Block delete if assigned to a group
    if (existing.group) {
      return fail(res, "INVALIDSYNTAX", "Cannot delete setting file assigned to a group");
    }
    await existing.save();

    return success(res, "OK", "Deleted");
  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};
