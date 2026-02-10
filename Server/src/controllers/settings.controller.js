// controllers/setting.controller.js
const Setting = require("../models/settings.model");
const Counter = require("../models/counter.model");
const { success, fail } = require("../utils/apiResponse");
const { buildQuery } = require("../utils/queryBuilder");
const Group = require("../models/group.model");

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
      name: { type: "string" },
    };

    const { filter, pagination, sorting } = buildQuery(req, allowedFilters);

    const total = await Setting.countDocuments(filter);
    const settings = await Setting.find(filter)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .sort(sorting)
      .lean();

    if (!settings) return fail(res, "NOTFOUND", "No Settings Found.");

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
const ALLOWED_FIELDS = ["name"];

exports.updateSetting = async (req, res) => {
  // console.log("Update Setting called with body:", req.body);
  try {
    const { id } = req.params;
    if (!id) {
      return fail(res, "INVALIDSYNTAX", "Missing id param");
    }

    const bodyKeys = Object.keys(req.body || {});
    if (bodyKeys.length === 0) {
      return fail(res, "INVALIDSYNTAX", "Nothing to update");
    }

    const invalidFields = bodyKeys.filter(
      (key) => !ALLOWED_FIELDS.includes(key)
    );

    // console.log("Invalid fields:", invalidFields);

    if (invalidFields.length > 0) {
      return fail(
        res,
        "FORBIDDEN",
        `Only 'name' field is editable. Invalid fields: ${invalidFields.join(", ")}`
      );
    }

    const setting = await Setting.findById(id);
    if (!setting) {
      return fail(res, "NOTFOUND", "Setting not found");
    }

    setting.name = req.body.name;
    await setting.save();

    return success(res, "OK", "Name updated successfully", setting);
  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};


/**
 * 
 * Block deletion if assigned to a group
 */
exports.deleteSetting = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return fail(res, "INVALIDSYNTAX", "Id not found");

    const existing = await Setting.findById(id);
    const group = await Group.exists({ settingId: existing.settingId });
    console.log("Group exists:", group);
    if (!existing) return fail(res, "NOTFOUND", "Setting not found");

    // Block delete if assigned to a group
    if (group) {
      return fail(
        res,
        "INVALIDSYNTAX",
        "Cannot delete setting file assigned to a group"
      );
    }
    else{
      await Setting.deleteOne({ _id: id });
      console.log("Deleted setting:", id);
    }

    return success(res, "OK", "Deleted");
  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};
