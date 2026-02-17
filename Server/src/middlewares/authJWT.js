const JWT_SECRET = 'geowise2025';
const jwt = require('jsonwebtoken'); 
const status = require('../config/status.config');
const {fail} = require("../utils/apiResponse");

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return fail(res, 'UNAUTHORIZED', 'No token provided');
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    console.log("Token received:", token);
    console.log("Using secret:", JWT_SECRET);
    console.log("Error:", err.message);
    console.log('JWT verification failed:', err.message);
    return fail(res, 'UNAUTHORIZED', 'Invalid or expired token');
  }
};
 
