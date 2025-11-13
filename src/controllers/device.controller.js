const status = require("../config/status.config");
const Device = require("../models/device.model");

exports.addDevice = async (req, res) => {

  const { imei, imsi, iccid, msisdn, Pid, carrier } = req.body;

  try {
    const existingDevice = await Device.findOne({ imei: imei }).lean().exec();

    if (existingDevice) {
      return res.json({ success: false,status: status.OK,msg: "Device with this IMEI already exists.",
      });
    }

    let device = new Device({
                            imei: imei,
                            imsi: imsi,
                            iccid: iccid,
                            msisdn: msisdn,
                            Pid: Pid,
                            carrier: carrier,
    });

    let result = await device.save();

    return res.json({
      success: true,status: status.CREATED,msg: "Device added successfully.",data: result});

  } catch (err) {
    console.log("error .............", err);
    return res.json({
      success: false,status: status.INVALIDSYNTAX,msg: "Failed to add device.",
    });
  }
};


exports.updateDevice = async (req, res) => {
  const { imei, imsi, iccid, msisdn, Pid, carrier } = req.body;

  try {

     const existingDevice = await Device.findOne({ imei: imei, is_deleted: false }).lean().exec();

    if (!existingDevice) {
      return res.json({ success: false,status: status.NOTFOUND,msg: "Device not found with this IMEI.",
      });
    }

    const updatedDevice = await Device.findOneAndUpdate({ imei: imei },
      { imsi, iccid, msisdn, Pid, carrier },
      { new: true } 
    ).lean().exec();

    return res.json({ success: true,status: status.OK,msg: "Device updated successfully.",data: updatedDevice,
    });

  } catch (err) {
    console.error("Error updating device:", err);
    return res.json({ success: false,status: status.INVALIDSYNTAX,msg: "Failed to update device.",
    });
  }
};


exports.getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find({is_deleted: false }).lean().exec();

    return res.json({ success: true, status: status.OK, msg: "All devices fetched successfully.",data: devices,
    });
  } catch (err) {
    console.error("Error fetching devices:", err);
    return res.json({ success: false,status: status.INTERNALSERVERERROR,msg: "Failed to fetch devices.",
    });
  }
};

exports.getDeviceByIMEI = async (req, res) => {
  const { imei } = req.params;

  try {
    const device = await Device.findOne({ imei: imei, is_deleted: false }).lean().exec();

    if (!device) {
      return res.json({ success: false,status: status.NOTFOUND,msg: "Device not found with this IMEI.",
      });
    }

    return res.json({ success: true,status: status.OK,msg: "Device fetched successfully.",data: device,
    });
  } catch (err) {
    console.error("Error fetching device:", err);
    return res.json({success: false,status: status.INTERNALSERVERERROR,msg: "Failed to fetch device.",
    });
  }
};



exports.deleteDevice = async (req, res) => {
  const imei  = req.query.imei;
 

  try {
    
    const device = await Device.findOne({ imei: imei,is_deleted:false }).exec();

    if (!device) {
      return res.json({
        success: false,
        status: status.NOTFOUND,
        msg: "Device not found with this IMEI.",
      });
    }

    device.is_deleted = true;
    await device.save();

    return res.json({ success: true,status: status.OK,msg: "Device deleted successfully.",data: device,
    });
  } catch (err) {
    console.error("Error deleting device:", err);
    return res.json({ success: false,status: status.INTERNALSERVERERROR,msg: "Failed to delete device.",
    });
  }
};



