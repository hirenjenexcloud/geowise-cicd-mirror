const express = require('express');
const router = express.Router();
const firmwareController = require('../controllers/firmware.controller');
const auth = require('../middlewares/authJWT');
const upload = require("../middlewares/firmwareFileUpload");

<<<<<<< Updated upstream
router.post('/', auth.authenticate, upload.single("firmwareFile"),firmwareController.createFirmwares);
router.get('/', firmwareController.getAllFirmwares);
router.get('/:id', auth.authenticate, firmwareController.getFirmwaresById);
router.put('/:id', auth.authenticate, firmwareController.updateFirmwares);
router.delete('/:id', auth.authenticate, firmwareController.deleteFirmwares);
=======
router.post('/',  upload.single("firmwareFile"),firmwareController.createFirmwares);
router.get('/',  firmwareController.getAllFirmwares);
router.get('/:id', firmwareController.getFirmwaresById);
router.put('/:id',  firmwareController.updateFirmwares);
router.delete('/:id',  firmwareController.deleteFirmwares);
>>>>>>> Stashed changes

module.exports = router;