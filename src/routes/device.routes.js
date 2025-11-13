const express = require('express');
const router = express.Router();
const authController = require('../controllers/device.controller');
const authManager = require('../middlewares/authJWT');

router.route('/').post(authManager.authenticate,authController.addDevice)
                 .put(authManager.authenticate,authController.updateDevice)
                 .get(authManager.authenticate,authController.getAllDevices)
                 .delete(authManager.authenticate,authController.deleteDevice);

router.route('/:imei').get(authManager.authenticate,authController.getDeviceByIMEI);    
module.exports = router;