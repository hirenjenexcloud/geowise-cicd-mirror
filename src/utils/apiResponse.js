const STATUS = require("../config/status.config");

exports.success = (res, code, message="") => {
  return res.status(STATUS[code]).json({
    status: true,
    message
  });
};

exports.fail = (res, code, message, details=null) => {
  return res.status(STATUS[code]).json({
    status: false,
    message,
    details
  });
};
