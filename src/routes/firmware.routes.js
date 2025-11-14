const express = require('express');
const router = express.Router();
const firmwareController = require('../controllers/firmware.controller');
const auth = require('../middlewares/authJWT');
const upload = require("../middlewares/firmwareFileUpload");

router.post('/', auth.authenticate, upload.single("firmwareFile"),firmwareController.uploadOtaFile);

module.exports = router;