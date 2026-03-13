const Alert = require("../models/alert.model");
const Device = require("../models/device.model"); // for IMEI validation
const { success, fail } = require("../utils/apiResponse");
const { updateDeviceConfigInCache } = require("../config/deviceCache");
const logger = require("../utils/logger");
const AlertHistory = require("../models/alertHistory.model");
const { buildQuery } = require("../utils/queryBuilder");
const { SendMsg } = require("../utils/msgSend");
const SendMail = require('../utils/EmailSend');

exports.createAlert = async (req, res) => {
  try {
    const {
      alertName,
      imei,
      alerts,
      speedThreshold,
      batteryThreshold,
      emails = [],
      mobiles = [],
      notes,
    } = req.body;

    if (!alertName) return fail(res, "INVALIDSYNTAX", "Alert name is required");

    if (!imei) return fail(res, "INVALIDSYNTAX", "IMEI is required");

    const exist = await Alert.findOne({ imei });
    if (exist) {
      return fail(res, "OK", "Alert already exists for this IMEI");
    }
    // Validate IMEI exists in database
    const device = await Device.findOne({ imei });
    if (!device) return fail(res, "NOTFOUND", "Invalid IMEI – device not found");

    // At least one alert must be selected
    if (!alerts || !Object.values(alerts).includes(true)) {
      return fail(res, "INVALIDSYNTAX", "At least one alert type must be selected");
    }

    // Speed alert rule
    if (alerts.speed && (!speedThreshold || speedThreshold <= 0)) {
      return fail(res, "INVALIDSYNTAX", "Speed threshold is required");
    }

    // Battery alert rule
    if (alerts.battery && (!batteryThreshold || batteryThreshold <= 0)) {
      return fail(res, "INVALIDSYNTAX", "Battery threshold is required");
    }

    // At least one email or mobile must be provided
    if (emails.length === 0 && mobiles.length === 0) {
      return fail(res, "INVALIDSYNTAX", "At least one email or mobile number must be provided");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (const e of emails) {
      if (!emailRegex.test(e)) {
        return fail(res, "INVALIDSYNTAX", `Invalid email: ${e}`);
      }
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    for (const m of mobiles) {
      if (!mobileRegex.test(m)) {
        return fail(res, "INVALIDSYNTAX", `Invalid mobile number: ${m}`);
      }
    }

    const alert = await Alert.create({
      alertName,
      imei,
      alerts,
      speedConfig: {
        enabled: alerts.speed,
        maxSpeed: speedThreshold,
      },
      batteryConfig: {
        enabled: alerts.battery,
        minVoltage: batteryThreshold,
      },
      emails,
      mobiles,
      notes,
    });

    return success(res, "CREATED", "Alert created successfully");

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};

exports.getAlertByImei = async (req, res) => {
  try {
    const { imei } = req.params;

    const alert = await Alert.findOne({ imei });

    if (!alert) return fail(res, "NOTFOUND", "Alert config not found for this IMEI");

    return success(res, "OK", "Alert fetched", alert);

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};


exports.updateAlert = async (req, res) => {
  try {
    const imeiParam = req.params.imei;
    const updateData = { ...req.body };

    // Prevent IMEI change
    if (updateData.imei && updateData.imei !== imeiParam) {
      return fail(res, "INVALIDSYNTAX", "IMEI cannot be changed");
    }

    // Find existing alert
    const existing = await Alert.findOne({ imei: imeiParam });
    if (!existing) return fail(res, "NOTFOUND", "Alert configuration not found");

    // Build merged object
    const merged = existing.toObject();

    // Merge top-level simple fields if provided
    if (updateData.alertName !== undefined) merged.alertName = updateData.alertName;
    if (updateData.notes !== undefined) merged.notes = updateData.notes;

    // Merge alerts object (important: keep missing flags)
    if (updateData.alerts && typeof updateData.alerts === "object") {
      merged.alerts = {
        ...merged.alerts,
        ...updateData.alerts
      };
    }

    // Emails (replace only if provided)
    if (updateData.emails !== undefined) {
      if (!Array.isArray(updateData.emails)) {
        return fail(res, "INVALIDSYNTAX", "emails must be an array");
      }
      if (updateData.emails.length > 5) {
        return fail(res, "INVALIDSYNTAX", "Maximum 5 emails allowed");
      }
      for (const e of updateData.emails) {
        if (!emailRegex.test(e)) {
          return fail(res, "INVALIDSYNTAX", `Invalid email: ${e}`);
        }
      }
      merged.emails = updateData.emails;
    }

    // Mobiles (replace only if provided)
    if (updateData.mobiles !== undefined) {
      if (!Array.isArray(updateData.mobiles)) {
        return fail(res, "INVALIDSYNTAX", "mobiles must be an array");
      }
      if (updateData.mobiles.length > 5) {
        return fail(res, "INVALIDSYNTAX", "Maximum 5 mobile numbers allowed");
      }
      for (const m of updateData.mobiles) {
        if (!mobileRegex.test(m)) {
          return fail(res, "INVALIDSYNTAX", `Invalid mobile number: ${m}`);
        }
      }
      merged.mobiles = updateData.mobiles;
    }

    // Ensure at least one contact method exists after update
    const hasEmails = (merged.emails && merged.emails.length > 0);
    const hasMobiles = (merged.mobiles && merged.mobiles.length > 0);
    if (!hasEmails && !hasMobiles) {
      return fail(res, "INVALIDSYNTAX", "Provide at least one email or mobile number");
    }

    // Speed config: if alerts.speed true (after merge), ensure threshold provided or existing value kept
    const speedEnabled = !!merged.alerts?.speed;
    if (speedEnabled) {
      // priority: explicitly provided speedThreshold (updateData), else existing.speedConfig.maxSpeed, else error
      const providedSpeed = updateData.speedThreshold;
      const finalSpeed = (providedSpeed !== undefined) ? providedSpeed : (merged.speedConfig?.maxSpeed);
      if (finalSpeed === undefined || finalSpeed === null || isNaN(finalSpeed)) {
        return fail(res, "INVALIDSYNTAX", "Speed threshold value is required when speed alert is enabled");
      }
      merged.speedConfig = { enabled: true, maxSpeed: Number(finalSpeed) };
    } else {
      // If speed is disabled by update, clear speedConfig.enabled but keep maxSpeed (optional)
      if (updateData.alerts && updateData.alerts.speed === false) {
        merged.speedConfig = { enabled: false, maxSpeed: merged.speedConfig?.maxSpeed };
      }
    }

    // Battery config: similar handling
    const batteryEnabled = !!merged.alerts?.battery;
    if (batteryEnabled) {
      const providedBattery = updateData.batteryThreshold;
      const finalBattery = (providedBattery !== undefined) ? providedBattery : (merged.batteryConfig?.minVoltage);
      if (finalBattery === undefined || finalBattery === null || isNaN(finalBattery)) {
        return fail(res, "INVALIDSYNTAX", "Battery threshold value is required when battery alert is enabled");
      }
      merged.batteryConfig = { enabled: true, minVoltage: Number(finalBattery) };
    } else {
      if (updateData.alerts && updateData.alerts.battery === false) {
        merged.batteryConfig = { enabled: false, minVoltage: merged.batteryConfig?.minVoltage };
      }
    }

    // If the request contains alerts object but all false, validate at least one true remains
    if (merged.alerts && Object.values(merged.alerts).every(v => v === false)) {
      return fail(res, "INVALIDSYNTAX", "At least one alert type must be selected");
    }

    // Build updateFields to write back (avoid overwriting alertFlags unless explicitly provided)
    const updateFields = {
      alertName: merged.alertName,
      alerts: merged.alerts,
      speedConfig: merged.speedConfig,
      batteryConfig: merged.batteryConfig,
      emails: merged.emails,
      mobiles: merged.mobiles,
      notes: merged.notes
    };

    // Optionally allow updating alertFlags only if provided explicitly
    if (updateData.alertFlags !== undefined) {
      updateFields.alertFlags = updateData.alertFlags;
    }

    const updated = await Alert.findOneAndUpdate(
      { imei: imeiParam },
      { $set: updateFields },
      { new: true }
    );

    if (updated) {
      // Update cache
      logger.info(`Updating alert cache for IMEI ${updated}`);
      updateDeviceConfigInCache(updated);
    }

    return success(res, "OK", "Alert updated successfully");

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};


exports.deleteAlert = async (req, res) => {
  try {
    const { imei } = req.params;

    const alert = await Alert.findOneAndDelete({ imei });

    if (!alert) return fail(res, "NOTFOUND", "Alert config not found");

    return success(res, "OK", "Alert deleted successfully");

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};

exports.getAlertsHistory = async (req, res) => {
  try {
    const { imei, imeis } = req.query;

    if (!imei && !imeis) {
      return fail(res, "NOTFOUND", "IMEI is required");
    }

    const allowedFilters = {
      imei: { type: "string" },
      imeis: { type: "array" },
      alertType: { type: "string" },
    };

    const { filter, pagination, sorting } = buildQuery(req, allowedFilters);

    if (req.query.imeis) {
      filter.imei = { $in: req.query.imeis.split(",") };
      delete filter.imeis;
    }

    const total = await AlertHistory.countDocuments(filter);
    const data = await AlertHistory.find(filter)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .sort(sorting)
      .lean();

      logger.info(`Fetched ${data} alert history records (Total: ${total})`);

    return success(res, "OK", "Fetched successfully", {
      totalRecords: total,
      totalPages: Math.ceil(total / pagination.limit),
      currentPage: pagination.page,
      pageSize: pagination.limit,
      data,
    });

  } catch (err) {
    return fail(res, "INTERNALSERVERERROR", "Server error", err.message);
  }
};


exports.checkSpeed = async function (packet, config) {
  console.log("------ checkSpeed executed ------");

  if (!config.alerts.speed) return;

  const limit = config.speedConfig.maxSpeed;
  const packetSpeed = packet.deviceData.engine.spdKmph;
  const key = packet.imei;

  const sent = config.alertFlags.speedAlertSent || false;

  if (packetSpeed > limit && !sent ) {
    console.log(`Speed Alert IMEI ${packet.imei}: ${packetSpeed}/${limit}`);
    sendSpeedAlert(packet, config);
    updateAlertFlags(config, true, "speedAlertSent");
  }
      // reset
    if (packetSpeed < limit && sent) {
        updateAlertFlags(config, false, "speedAlertSent" );
    }

};


exports.checkBattery = async function (packet, config) {
  console.log("------ checkBattery executed ------");

  if (!config.alerts.battery) return;
 
    const level = packet.deviceData.power.battery;
    const thr = config.batteryConfig.minVoltage;
    const key = packet.imei;

    // console.log(`Battery level for IMEI ${key}: ${level} V (Threshold: ${thr} V)`);
 
    const sent = config.alertFlags.batteryAlertSent || false;
 
    if (level < thr && !sent) {
        console.log(`Battery Low IMEI ${key}: ${level} < ${thr}`);
        sendBatteryAlert(packet, config);
        updateAlertFlags(config, true, "batteryAlertSent");
    }
 
    // reset
    if (level >= thr && sent) {
        updateAlertFlags(config, false, "batteryAlertSent");
    }

};

exports.handlePowerConnect = async function (packet, config) {
  console.log("------ handlePowerConnect executed ------");
  if (!config.alerts.powerConnected) {
    logger.warn(`No alert config found for IMEI ${packet.imei} in handlePowerConnect`);
    return;
  } else {
    createAlertHistoryRecord(packet, 'Power Connected');
    const subject = 'Power Connected';
    const message = `Power was connected to your device ${packet.imei}.`;
    sendMsg(config, message);
    sendEmail(config, subject, message);
  }
};

exports.handlePowerDisconnect = async function (packet, config) {
  console.log("------ handlePowerDisconnect executed ------");
  if (!config.alerts.powerDisconnected) {
    logger.warn(`No alert config found for IMEI ${packet.imei} in handlePowerDisconnect`);
    return;
  } else {
    createAlertHistoryRecord(packet, 'Power Disconnected');
    const message = `Power was disconnected to your device ${packet.imei}.`;
    const subject = 'Power Disconnected';
    sendMsg(config, message);
    sendEmail(config, subject, message);
  }
};

function sendBatteryAlert(packet, config) {
  console.log(`Battery Email Sent → ${packet.imei}`);
  createAlertHistoryRecord(packet, 'Low Battery');
  const message = `Your vehicle ${packet.imei} battery is low.`;
  const subject = 'Battery Alert generated';
  sendMsg(config, message);
  sendEmail(config, subject, message);
}

function sendSpeedAlert(packet, config) {
  console.log(`Speed Email Sent → ${packet.imei}`);
  createAlertHistoryRecord(packet, 'Speed');
  const message = `Your vehicle ${packet.imei} exceeded the set speed limit at Lat: ${packet.deviceData.location.lat}, Lng: ${packet.deviceData.location.long}.`;
  const subject = 'Speed Alert generated';
  sendMsg(config, message);
  sendEmail(config, subject, message);
}

function updateAlertFlags(config, flag, flagType) {

  console.log(`Updating alert flag ${flagType} to ${flag} for IMEI ${config.imei}`);

  let common = {};
  if ("speedAlertSent" === flagType) {
    common = { "alertFlags.speedAlertSent": flag };
    config.alertFlags.speedAlertSent = flag;
  } else {
    common = { "alertFlags.batteryAlertSent": flag };
    config.alertFlags.batteryAlertSent = flag;
  }
  
  updateDeviceConfigInCache(config);

  return Alert.findOneAndUpdate(
    { imei: config.imei },
    { $set: common },
  ).exec();
}

function createAlertHistoryRecord(packet, alertType) {

  return AlertHistory.create({
    imei: packet.imei,
    alertType: alertType,
    location: {
      lat: packet.deviceData.location.lat,
      long: packet.deviceData.location.long
    },
    speed: packet.deviceData.engine.spdKmph,
    battery: packet.deviceData.power.battery
  });
}

function sendEmail(config, subject, message) {

  if (config.emails.length != 0) {
    for (let index = 0; index < config.emails.length; index++) {
      const element = config.emails[index];
      console.log(index, ") element is a :----> ", element);
      SendMail({ to: element, subject, text: message });
    }
  }
}

function sendMsg(config, message) {

  if(config.mobiles.length != 0){
    for (let index = 0; index < config.mobiles.length; index++) {
      const element = config.mobiles[index];
      console.log(index,") element is a :----> ",element);
      SendMsg(message, element);
    }
  }
}