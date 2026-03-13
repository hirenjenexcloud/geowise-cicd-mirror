const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings.controller');
const auth = require('../middlewares/authJWT'); // protect routes

// Create / Read / Update / Delete
router.post('/', auth.authenticate, settingsController.createSetting);
router.get('/',auth.authenticate, settingsController.getAllSettings);
router.get('/:id', auth.authenticate, settingsController.getSettingById);
router.put('/:id', auth.authenticate, settingsController.updateSetting);
router.delete('/:id', auth.authenticate, settingsController.deleteSetting);

module.exports = router;

