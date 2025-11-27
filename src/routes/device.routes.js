const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/device.controller');
const authManager = require('../middlewares/authJWT');

router.route('/history').get(authManager.authenticate,DeviceController.deviceHistory);
router.route('/').post(authManager.authenticate,DeviceController.addDevice)
                 .put(authManager.authenticate,DeviceController.updateDevice)
                 .get(authManager.authenticate,DeviceController.getAllDevices);

router.route('/:imei').get(authManager.authenticate,DeviceController.getDeviceByImei)
                      .delete(authManager.authenticate,DeviceController.deleteDeviceByImei);


module.exports = router;