const express = require('express');
const AuthRouter = require('../routes/auth.routes')
const DeviceRouter = require('../routes/device.routes')
const SettingRouter = require('../routes/satellite.routes');
const router = express.Router();

router.use('/auth',AuthRouter);
router.use('/device',DeviceRouter);
router.use('/groups', require('./group.routes'));
router.use('/settings', SettingRouter);


module.exports = router;