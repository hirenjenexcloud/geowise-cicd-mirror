const express = require('express');
const router = express.Router();
const firmwareController = require('../controllers/firmware.controller');
const auth = require('../middlewares/authJWT');
const upload = require("../middlewares/firmwareFileUpload");

router.post('/', auth.authenticate, upload.single("firmwareFile"),firmwareController.createFirmwares);
router.get('/', auth.authenticate, firmwareController.getAllFirmwares);
router.get('/:id', auth.authenticate, firmwareController.getFirmwaresById);
router.put('/:id', auth.authenticate, firmwareController.updateFirmwares);
router.delete('/:id', auth.authenticate, firmwareController.deleteFirmwares);

module.exports = router;