const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/device.controller');
const authManager = require('../middlewares/authJWT');

// router.post(authManager.authenticate,authController.addDevice)
//                  .put(authManager.authenticate,authController.updateDevice)
//                  .get(authManager.authenticate,authController.getAllDevices)
//                  .delete(authManager.authenticate,authController.deleteDevice);

// router.route('/:imei').get(authManager.authenticate,authController.getDeviceByIMEI);  


router.post('/', authManager.authenticate,DeviceController.addDevice);
router.get('/', authManager.authenticate,DeviceController.getAllDevices);
router.get('/:id', authManager.authenticate,DeviceController.getDeviceByID);
router.put('/:id',authManager.authenticate,DeviceController.updateDevice);
router.delete('/:id', authManager.authenticate,DeviceController.deleteDevice);

module.exports = router;