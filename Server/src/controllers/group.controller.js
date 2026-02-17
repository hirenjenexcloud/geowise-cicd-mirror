const Group = require('../models/group.model');
const Device =  require('../models/device.model');
const Firmware =  require('../models/firmware.model');
const Setting  = require('../models/settings.model');
const logger = require('../utils/logger');
const { success, fail } = require("../utils/apiResponse");
const { buildQuery } = require("../utils/queryBuilder");
const mongoose = require("mongoose");

var mqttClient ;

exports.setmqttClient = (client) =>{
   mqttClient = client;
} 
// Create new group
exports.createGroup = async (req, res) => {
  try {
    const { grpName,fwId, settingId, hwVersion,  } = req.body;

    // Validate required fields
    if (!grpName || !fwId || !settingId || !hwVersion) {
      return fail(res, "INVALIDSYNTAX", "Missing required fields");
    }

    // Check duplicate group name
    const existingGroup = await Group.findOne({ grpName: grpName.trim() });
    if (existingGroup) {
      return fail(res, "INVALIDSYNTAX", "Group name already exists");
    }

    // Check firmware exists
    const firmware = await Firmware.findOne({ fwId: fwId });
    if (!firmware) {
      return fail(res, "INVALIDSYNTAX", "Invalid firmware version");
    }

    // Check setting exists
    const setting = await Setting.findOne({ settingId: settingId });
    if (!setting) {
      return fail(res, "INVALIDSYNTAX", "Invalid setting");
    }

    // Get swVersion from firmware table
    const swVersion = firmware.swVersion;

    // Create group with updated schema
    await Group.create({
      grpName: grpName.trim(),
      fwId,
      settingId,
      hwVersion,
      swVersion,
      desc: req.body.desc || ""
    });

    return success(res, "CREATED", "Group created successfully");

  } catch (err) {
    logger.error("Create group error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};



// Get all groups

exports.getAllGroups = async (req, res) => {
  try {
    // Allowed filters based on your Group model
    const allowedFilters = {
      // grpName: { type: "string" },
      fwId: { type: "number" },
      settingId: { type: "number" },
      hwVersion: { type: "string" },
      swVersion: { type: "string" },
    };

    const { filter, pagination, sorting } = buildQuery(req, allowedFilters);

    const total = await Group.countDocuments(filter);

    if (Object.keys(req.query).length === 0) {
      const groups = await Group.find().lean();
      return success(res, "OK", "Groups fetched successfully", groups);
    } else {
      const groups = await Group.find(filter)
        .skip(pagination.skip)
        .limit(pagination.limit)
        .sort(sorting)
        .lean();

      return success(res, "OK", "Groups fetched successfully", {
        totalRecords: total,
        totalPages: Math.ceil(total / pagination.limit),
        currentPage: pagination.page,
        pageSize: pagination.limit,
        groups,
      });
    }

  } catch (err) {
    logger.error("Fetch groups error:", err);
    return fail(res, "INTERNALSERVERERROR", err.message || "Server error");
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
    const { fwId, settingId } = req.body;

    let updateData = { ...req.body };

    const oldGroup = await Group.findById(req.params.id);
    if (!oldGroup) {
      return fail(res, "NOTFOUND", "Group not found");
    }

    const oldFwId = oldGroup.fwId;

    // Do NOT allow updating hwVersion
    if (updateData.hwVersion !== undefined) {
      delete updateData.hwVersion;
    }

    // If firmware ID is provided in update, validate it
    if (fwId !== undefined) {
      const firmware = await Firmware.findOne({ fwId });
      if (!firmware) {
        return fail(res, "INVALIDSYNTAX", "Invalid firmware version");
      }

      // Inject swVersion from firmware
      updateData.swVersion = firmware.swVersion;
    }

    // If setting ID is provided in update, validate it
    if (settingId !== undefined) {
      const setting = await Setting.findOne({ settingId });
      if (!setting) {
        return fail(res, "INVALIDSYNTAX", "Invalid setting");
      }
    }

    // Clean trimmed grpName if updated
    if (updateData.grpName) {
      updateData.grpName = updateData.grpName.trim();
    }

    // Duplicate name check
    if (updateData.grpName) {
      const existing = await Group.findOne({
        grpName: updateData.grpName,
        _id: { $ne: req.params.id }
      });

      if (existing) {
        return fail(res, "INVALIDSYNTAX", "Group name already exists");
      }
    }

    const group = await Group.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!group) {
      return fail(res, "NOTFOUND", "Group not found");
    }
    if (fwId !== undefined && fwId !== oldFwId) {
      console.log("Firmware ID changed!!");
      sendReboot(mqttClient,req.params.id)
 
    }
    return success(res, "OK", "Group updated successfully");

  } catch (err) {
    logger.error("Update group error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};


// Delete group
exports.deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.id;

    // Check if any device is using this group
    const deviceUsingGroup = await Device.findOne({ grpId: groupId });

    if (deviceUsingGroup) {
      return fail(res, "INVALIDSYNTAX", "Group cannot be deleted because it is assigned to a device");
    }

    // Now safe to delete
    const group = await Group.findByIdAndDelete(groupId);

    if (!group) {
      return fail(res, "NOTFOUND", "Group not found");
    }

    return success(res, "OK", "Group deleted successfully");

  } catch (err) {
    logger.error("Delete group error:", err);
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
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
    const swVersion = group.swVersion;
    const hwVersion = group.hwVersion;

    if (!group) {
      return fail(res, "NOTFOUND", "Group not found");
    }

    // Find existing devices that match provided IMEIs
    const foundDevices = await Device.find({ imei: { $in: imeis } }).select("imei _id grpId swVersion hwVersion");

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
      { $set: { grpId ,hwVersion,swVersion} }
    );

    for (const device of foundDevices) {
      const oldSw = device.swVersion;
      const oldHw = device.hwVersion;

      const isSwChanged = oldSw !== swVersion;
      const isHwChanged = oldHw !== hwVersion;

      if (isSwChanged || isHwChanged) {
        console.log(`Firmware mismatch → reboot required for IMEI: ${device.imei}`);

        mqttClient.publish(String(device.imei), "reboot", { qos: 2 }, (err) => {
          if (err) {
            console.log(`Failed to send reboot to IMEI: ${device.imei}`, err);
          } else {
            console.log(`Reboot sent → IMEI=${device.imei}`);
          }
        });
        
       
      }
    }
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


 
async function sendReboot(mqttClient,grpId) {
 
  try {
    if (!grpId) return;
    if (!mqttClient) { console.log("MQTT client not ready");
      return;
    }
    console.log("Finding devices for group:", grpId);
    const devices = await Device.find({ grpId:grpId }).lean().exec();
    if (!devices || devices.length === 0) {
      console.log("No devices found for group:", grpId);
      return;
    }
    console.log(`Rebooting ${devices.length} devices...`);
    devices.forEach(device => {
      const IMEI = String(device.imei);         
      const payload = "reboot";
 
      mqttClient.publish(IMEI, payload, { qos: 2 }, (err) => {
        if (err) console.log("Publish reboot error:", err);
        else console.log(`Reboot sent → IMEI=${device.imei}`);
      });
    });
 
  } catch (err) {
    console.log("sendReboot error:", err);
  }
}
 
