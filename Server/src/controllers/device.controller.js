const Device = require("../models/device.model");
const Group = require("../models/group.model");
const deviceHistory = require("../models/devicePackets.model");
const alertHistory = require("../models/alertHistory.model");
const Alert = require("../models/alert.model");
const Zone = require("../models/zone.model");
const { success, fail } = require("../utils/apiResponse");
const logger = require('../utils/logger');
const { buildQuery } = require("../utils/queryBuilder");

// Add new device
exports.addDevice = async (req, res) => {
  const payload = { ...req.body }
  console.log("Payload in addDevice:", payload);
  let group = await Group.findById({ _id: payload.grpId }).lean().exec();
  if (!group) return fail(res, "NOTFOUND", "Group not found with this Name");
  if (!group.swVersion) return fail(res, "NOTFOUND", "Group has no Firmware assigned");

  payload.swVersion = group.swVersion;
  payload.hwVersion = group.hwVersion;
  try {
    let device = new Device(payload);
    let result = await device.save();
    return success(res, "CREATED", "Device added successfully");
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      return fail(res, "INVALIDSYNTAX", "Duplicate key error", err.message);
    }
    if (err.name === "ValidationError") {
      return fail(res, "INVALIDSYNTAX", "Validation failed", err.message);
    }
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

// Update device By IMEI
exports.updateDevice = async (req, res) => {
  const imei = req.body.imei;
  const { imsi, iccid, msisdn, carrier } = req.body.deviceInfo;
  // const id  = req.params.id;
  try {
    const existingDevice = await Device.findOne({ imei: imei }).lean().exec();
    if (!existingDevice) return success(res, "NOTFOUND", "Device not found.");
    const updatedDevice = await Device.findOneAndUpdate({ imei: imei },
      { imei, deviceInfo: { imsi, iccid, msisdn, carrier } },
      { new: true }
    ).lean().exec();
    return success(res, "OK", "Device updated successfully.")
  } catch (err) {
    console.error("Error updating device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

// Get all devices with pagination
exports.getAllDevices = async (req, res) => {
  try {
    const allowedFilters = {
      imei: { type: "string" },
      imeis: { type: "array" },
      grpId: { type: "string" },
      swVersion: { type: "string" },
      hwVersion: { type: "string" },
    };

    const { filter, pagination, sorting } = buildQuery(req, allowedFilters);

    if (req.query.imeis) {
      filter.imei = { $in: req.query.imeis.split(",") };
      delete filter.imeis;
    }

    const total = await Device.countDocuments(filter);
    const devices = await Device.find(filter)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .sort(sorting)
      .lean();

    return success(res, "OK", "Fetched successfully", {
      totalRecords: total,
      totalPages: Math.ceil(total / pagination.limit),
      currentPage: pagination.page,
      pageSize: pagination.limit,
      devices,
    });

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

// Get device by IMEI
exports.getDeviceByImei = async (req, res) => {
  const imei = req.params.imei;
  try {
    const device = await Device.findOne({ imei: imei }).lean().exec()
    if (!device) return fail(res, "NOTFOUND", "Device not found.");
    return success(res, "OK", "Fetch Device Successfully", device);
  } catch (err) {
    console.error("Error fetching device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message)

  }
};

// Delete device by IMEI
exports.deleteDeviceByImei = async (req, res) => {
  const imei = req.params.imei;
  try {
    const device = await Device.findOne({ imei: imei }).lean().exec();
    if (!device) return fail(res, "NOTFOUND", "Device not found with this ID.");

    await Promise.all([
      Device.deleteOne({ imei }),
      deviceHistory.deleteMany({ imei }),
      alertHistory.deleteMany({ imei }),
      Alert.deleteMany({ imei }),
      Zone.deleteMany({ imei })
    ]);

    return success(res, 'OK', "Device deleted successfully.");
  } catch (err) {
    console.error("Error deleting device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

// Device history api 
exports.deviceHistory = async (req, res) => {
  console.log("Query params in deviceHistory:", req.query);
  const { imei,imeis} = req.query;

  try {
    console.log("Fetching device history with IMEI(s):", imei || imeis);
    // Required field checks
    if (!imei && !imeis) {
      return fail(res, "NOTFOUND", "IMEI is required");
    }

      const allowedFilters = {
      imei: { type: "string" },
      imeis: { type: "array" },
      "event.eType": { type: "number"},
    };

    console.log("Building query with allowed filters:", allowedFilters);

    const { filter, pagination, sorting } = buildQuery(req, allowedFilters);

    console.log("Constructed filter:", filter);

    if (req.query.imeis) {
      filter.imei = { $in: req.query.imeis.split(",") };
      delete filter.imeis;
    }

    const total = await deviceHistory.countDocuments(filter);
    console.log("Total records found:", total);
    const data = await deviceHistory.find(filter)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .sort(sorting)
      .lean();

    console.log("Fetched data:", data);

    return success(res, "OK", "Fetched successfully", {
      totalRecords: total,
      totalPages: Math.ceil(total / pagination.limit),
      currentPage: pagination.page,
      pageSize: pagination.limit,
      data,
    });

  } catch (err) {
    console.error("Error fetching device history:", err);
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};



