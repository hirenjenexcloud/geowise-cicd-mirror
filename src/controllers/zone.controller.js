const Zone = require('../models/zone.model');
const logger = require('../utils/logger');
const { success, fail } = require("../utils/apiResponse");
const mongoose = require("mongoose");

exports.createZone = async (req, res) => {
  try {
    const {imei, name, type, notes, latLongArr } = req.body;

    // ---------- validation ----------
    if (!imei) {
      return fail(res, "INVALIDSYNTAX", "imei is required");
    }
    if (!name || !type) {
      return fail(res, "INVALIDSYNTAX", "name and type are required");
    }
    if (!latLongArr || !Array.isArray(latLongArr) || latLongArr.length < 3) {
      return fail(res, "INVALIDSYNTAX", "latLongArr must contain at least 3 locations");
    }

    for (let loc of latLongArr) {
      if (typeof loc.lat !== "number" || typeof loc.lng !== "number") {
        return fail(res, "INVALIDSYNTAX", "lat/lng must be numbers");
      }
    }

    const existingZone = await Zone.findOne({ imei });
    if (existingZone) {
      return fail(res, "INVALIDSYNTAX", "Zone for this IMEI already exists");
    }

    const zone = await Zone.create({ imei,name, type, notes, latLongArr });

    return success(res, "CREATED", "Zone created successfully");

  } catch (err) {
    logger.error("Create zone error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};

exports.getAllZones = async (req, res) => {
  try {
    const zones = await Zone.find().lean();

    if (zones.length === 0) {
      return fail(res, "NOTFOUND", "No zones found");
    }

    return success(res, "OK", "Zones fetched successfully", zones);

  } catch (err) {
    logger.error('Fetch zones error:', err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};

exports.getZoneByImei = async (req, res) => {
  try {
    const { imei } = req.params;

    if (!imei) {
      return fail(res, "INVALIDSYNTAX", "IMEI is required");
    }

    const zone = await Zone.findOne({ imei });

    if (!zone) {
      return fail(res, "NOTFOUND", "Zone not found");
    }

    return success(res, "OK", "Zone fetched successfully", zone);

  } catch (err) {
    logger.error("Fetch zone error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};



exports.updateZone = async (req, res) => {
  try {
    const { imei } = req.params;

    if (!imei) {
      return fail(res, "INVALIDSYNTAX", "IMEI is required");
    }

    // Prevent IMEI update (IMEI must remain unique)
    if (req.body.imei !== undefined) {
      delete req.body.imei;
    }

    // Validate latLongArr if provided
    if (req.body.latLongArr && req.body.latLongArr.length < 3) {
      return fail(res, "INVALIDSYNTAX", "latLongArr must contain at least 3 locations");
    }

    const zone = await Zone.findOneAndUpdate(
      { imei },
      req.body,
      { new: true }
    );

    if (!zone) {
      return fail(res, "NOTFOUND", "Zone not found");
    }

    return success(res, "OK", "Zone updated successfully");

  } catch (err) {
    logger.error("Update zone error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};


exports.deleteZone = async (req, res) => {
  try {
    const { imei } = req.params;

    if (!imei) {
      return fail(res, "INVALIDSYNTAX", "IMEI is required");
    }

    const zone = await Zone.findOneAndDelete({ imei });

    if (!zone) {
      return fail(res, "NOTFOUND", "Zone not found");
    }

    return success(res, "OK", "Zone deleted successfully");

  } catch (err) {
    logger.error("Delete zone error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};



