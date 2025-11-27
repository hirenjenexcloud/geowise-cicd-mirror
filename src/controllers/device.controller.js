const Device = require("../models/device.model");
const Group =  require("../models/group.model");
const { success, fail } = require("../utils/apiResponse");

// Add new device
exports.addDevice = async (req, res) => {
  const  payload = { ...req.body }
  console.log("Payload in addDevice:", payload);
  let group = await Group.findById({ _id: payload.grpId }).lean().exec();
  if (!group) return fail(res, "NOTFOUND", "Group not found with this Name");
  if (!group.swVersion) return fail(res, "NOTFOUND", "Group has no Firmware assigned");
  
  payload.swVersion = group.swVersion;
  payload.hwVersion = group.hwVersion; 
  try {
    let device = new Device(payload);
    let result = await device.save();
    return success(res,"CREATED", "Device added successfully");
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      return fail(res,"INVALIDSYNTAX", "Duplicate key error", err.message);
    }
    if (err.name === "ValidationError") {
      return fail(res,"INVALIDSYNTAX", "Validation failed", err.message);
    }
    return fail(res,"INTERNALSERVERERROR", err.message);
  }
};

// Update device By IMEI
exports.updateDevice = async (req, res) => {
  const { imei, imsi, iccid, msisdn, carrier } = req.body;
  // const id  = req.params.id;
  try {
    const existingDevice = await Device.findOne({ imei: imei}).lean().exec();
    if (!existingDevice)  return success(res, "NOTFOUND", "Device not found.");
    const updatedDevice = await Device.findOneAndUpdate({ imei: imei },
      {imei, imsi, iccid, msisdn,carrier },
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
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const totalDevices = await Device.countDocuments().lean().exec();
    const totalPages = Math.ceil(totalDevices / limit);
    const devices = await Device.find().skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 }).lean().exec();
    let data =  {
        totalRecords: totalDevices,
        totalPages: totalPages,
        currentPage: page,
        pageSize: limit,
        devices: devices
      }
    return success(res,"OK","Fetch devices successfully", data)
   
  } catch (err) {
    console.error("Error fetching devices:", err);
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};

// Get device by IMEI
exports.getDeviceByImei = async (req, res) => {
  const imei  = req.params.imei;
  try {
    const device = await Device.findOne({imei:imei}).lean().exec()
    if (!device) return fail(res, "NOTFOUND", "Device not found.");
    return success(res, "OK", "Fetch Device Successfully", device);
  } catch (err) {
    console.error("Error fetching device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message)
    
  }
};

// Delete device by IMEI
exports.deleteDeviceByImei = async (req, res) => {
  const imei  = req.params.imei;
  try {
    const device = await Device.findOne({imei:imei}).lean().exec();
    if (!device) return fail(res, "NOTFOUND", "Device not found with this ID.");
    let result =  await Device.deleteOne({ imei: imei }).lean().exec();
    if(result) return success(res, 'OK', "Device deleted successfully.");
  } catch (err) {
    console.error("Error deleting device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};



