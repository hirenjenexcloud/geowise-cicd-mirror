const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/device.controller');
const auth = require('../middlewares/authJWT');

router.route('/history').get(auth.authenticate,DeviceController.deviceHistory);
router.route('/userId').get(auth.authenticate,DeviceController.getDeviceByUserId);
router.route('/').post(auth.authenticate,DeviceController.addDevice)
                 .put(auth.authenticate,DeviceController.updateDevice)
                 .get(auth.authenticate, DeviceController.getAllDevices);

router.route('/:imei').get(auth.authenticate,DeviceController.getDeviceByImei)
                      .delete(auth.authenticate,DeviceController.deleteDeviceByImei);


module.exports = router;