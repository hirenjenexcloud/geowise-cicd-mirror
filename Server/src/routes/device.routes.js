const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/device.controller');
const authManager = require('../middlewares/authJWT');

router.route('/history').get(DeviceController.deviceHistory);
router.route('/').post(DeviceController.addDevice)
                 .put(DeviceController.updateDevice)
                 .get(DeviceController.getAllDevices);

router.route('/:imei').get(DeviceController.getDeviceByImei)
                      .delete(DeviceController.deleteDeviceByImei);


module.exports = router;