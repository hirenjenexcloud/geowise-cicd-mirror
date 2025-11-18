const Device = require("../models/device.model");
const { success, fail } = require("../utils/apiResponse");

// Add new device
exports.addDevice = async (req, res) => {
  const  payload = { ...req.body }
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

// Update device
exports.updateDevice = async (req, res) => {
  const { imei, imsi, iccid, msisdn, carrier,swVersion,hwVersion } = req.body;
  const id  = req.params.id;
  try {
    const existingDevice = await Device.findById({ _id: id}).lean().exec();
    if (!existingDevice)  return success(res, "NOTFOUND", "Device not found with this ID.");
    const updatedDevice = await Device.findByIdAndUpdate({ _id: id },
      {imei, imsi, iccid, msisdn,carrier,swVersion,hwVersion },
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

// Get device by ID
exports.getDeviceByID = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id).lean().exec()
    if (!device) return fail(res, "NOTFOUND", "Device not found with this ID.");
    return success(res, "OK", "Fetch Device Successfully", device);
  } catch (err) {
    console.error("Error fetching device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message)
    
  }
};

// Delete device by ID
exports.deleteDevice = async (req, res) => {
  const id  = req.params.id;
  try {
    const device = await Device.findById({ _id: id }).lean().exec();
    if (!device) return fail(res, "NOTFOUND", "Device not found with this ID.");
    let result =  await Device.deleteOne({ _id: id }).lean().exec();
    if(result) return success(res, 'OK', "Device deleted successfully.");
  } catch (err) {
    console.error("Error deleting device:", err);
    return fail(res, "INTERNALSERVERERROR", err.message);
  }
};



