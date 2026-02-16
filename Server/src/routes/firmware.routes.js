const express = require('express');
const router = express.Router();
const firmwareController = require('../controllers/firmware.controller');
const auth = require('../middlewares/authJWT');
const upload = require("../middlewares/firmwareFileUpload");

router.post('/',  upload.single("firmwareFile"),firmwareController.createFirmwares);
router.get('/',  firmwareController.getAllFirmwares);
router.get('/:id', firmwareController.getFirmwaresById);
router.put('/:id',  firmwareController.updateFirmwares);
router.delete('/:id',  firmwareController.deleteFirmwares);

module.exports = router;