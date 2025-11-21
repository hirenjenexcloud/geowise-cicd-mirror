const express = require('express');
const AuthRouter = require('../routes/auth.routes')
const DeviceRouter = require('../routes/device.routes')
const GroupsRouter = require('../routes/group.routes')
const SettingRouter = require('./settings.routes');
const FirmwareRouter = require('./firmware.routes');
const ZoneRouter = require('./zone.routes');
const router = express.Router();

router.use('/auth',AuthRouter);
router.use('/device',DeviceRouter);
router.use('/groups', GroupsRouter);
router.use('/settings', SettingRouter);
router.use('/firmware', FirmwareRouter);
router.use('/zone', ZoneRouter);


module.exports = router;