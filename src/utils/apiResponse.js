const STATUS = require("../config/status.config");

/**
 * Success Response
 * - For GET API: pass data
 * - For POST/PUT/DELETE: message only unless data is passed manually
 */
exports.success = (res, code, message = "", data = null) => {
  const response = {
    status: true,
    code: STATUS[code],
    message
  };
  if (data !== null) response.data = data;

  return res.status(STATUS[code]).json(response);
};


/**
 * Fail Response
 */
exports.fail = (res, code, message, details = null) => {
  const response = {
    status: false,
    code: STATUS[code],
    message
  };

  if (details) response.details = details;

  return res.status(STATUS[code]).json(response);
};
