const Group = require('../models/group.model');
const Device =  require('../models/device.model');
const logger = require('../utils/logger');
const { success, fail } = require("../utils/apiResponse");
const mongoose = require("mongoose");


// Create new group
exports.createGroup = async (req, res) => {
  try {
    const { grpName, product, fwId, settings, hwVersion } = req.body;

    //  Validate required fields
    if (!grpName || !product || !fwId || !settings || !hwVersion) {
      return fail(res, "INVALIDSYNTAX", "Missing required fields");
    }

    //  Check duplicate grpName
    const existingGroup = await Group.findOne({ grpName: grpName.trim() });
    if (existingGroup) {
      return fail(res, "INVALIDSYNTAX", "Group name already exists");
    }

    //  Create group
    const group = await Group.create(req.body);

    return success(res, "CREATED", "Group created successfully");

  } catch (err) {
    logger.error("Create group error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};


// Get all groups
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();

     // If empty list
    if (!groups || groups.length === 0) {
      return fail(res, "NOTFOUND", "No groups found", []);
    }
    return success(res,"OK",'Groups fetched successfully',groups);
  } catch (err) {
    logger.error('Fetch groups error:', err);
    return fail(res,"INTERNALSERVERERROR",'Server error');
  }
};

// Get group by ID
exports.getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) return fail(res,"NOTFOUND" ,'Group not found');
    return success(res,"OK",'Group fetched successfully',group );
  } catch (err) {
    logger.error('Fetch group error:', err);
    return fail(res,"INTERNALSERVERERROR",'Server error');
  }
};

// Update group
exports.updateGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!group) return fail(res,"NOTFOUND" ,'Group not found');
    return success(res,"OK",'Group updated successfully');
  } catch (err) {
    logger.error('Update group error:', err);
    return fail(res,"INTERNALSERVERERROR",'Server error');
  }
};

// Delete group
exports.deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) return fail(res,"NOTFOUND" ,'Group not found');
    return success(res,"OK",'Group deleted successfully');
  } catch (err) {
    logger.error('Delete group error:', err);
    return fail(res,"INTERNALSERVERERROR",'Server error');
  }
};

exports.importDevices = async (req, res) => {
  try {
    // Accept grpId either as route param or in body
    const grpId = req.body.grpId;
    const imeis = req.body.imeis || req.body.devices || req.body.imeiList;

    // Validate grpId
    if (!grpId || !mongoose.isValidObjectId(grpId)) {
      return fail(res, "INVALIDSYNTAX", "Valid grpId is required");
    }

    // Validate imeis array
    if (!Array.isArray(imeis) || imeis.length === 0) {
      return fail(res, "INVALIDSYNTAX", "imei list (array) is required in request body");
    }

    // Ensure group exists
    const group = await Group.findById(grpId);
    if (!group) {
      return fail(res, "NOTFOUND", "Group not found");
    }

    // Find existing devices that match provided IMEIs
    const foundDevices = await Device.find({ imei: { $in: imeis } }).select("imei _id grpId");

    // If no devices matched, return 200 with empty result (handled gracefully)
    if (!foundDevices || foundDevices.length === 0) {
      return success(res, "OK", "No matching devices found", {
        matchedCount: 0,
        modifiedCount: 0,
        notFoundImeis: imeis
      });
    }

    // Update matched devices to set grpId
    const updateResult = await Device.updateMany(
      { imei: { $in: imeis } },
      { $set: { grpId} }
    );

    // Compute which IMEIs were not found
    const foundImeisSet = new Set(foundDevices.map(d => String(d.imei)));
    const notFoundImeis = imeis.filter(i => !foundImeisSet.has(String(i)));

    // Respond with summary
    return success(res, "OK", "Devices imported to group", {
      matchedCount: updateResult.matchedCount ?? foundDevices.length,
      modifiedCount: updateResult.modifiedCount ?? 0,
      notFoundImeis,
    });
  } catch (err) {
    logger.error("Import devices error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};

exports.getDevicesByGroup = async (req, res) => {
  try {
    const grpId =  req.params.grpId;

    if (!grpId || !mongoose.isValidObjectId(grpId)) {
      return fail(res, "INVALIDSYNTAX", "Valid grpId is required");
    }

    // Check if group exists
    const group = await Group.findById(grpId);
    if (!group) {
      return fail(res, "NOTFOUND", "Group not found");
    }

    // Fetch devices
    const devices = await Device.find({ grpId }).lean();

    if (!devices || devices.length === 0) {
      return fail(res, "NOTFOUND", "No devices found in this group");
    }

    return success(res, "OK", "Devices fetched successfully", devices);

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};
 
