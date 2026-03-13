const express = require("express");
const router = express.Router();
const zoneController = require("../controllers/zone.controller");
const auth = require('../middlewares/authJWT');

router.post("/", auth.authenticate, zoneController.createZone);
router.get("/", auth.authenticate, zoneController.getAllZones);
router.get("/:imei", auth.authenticate, zoneController.getZoneByImei);
router.put("/:imei", auth.authenticate, zoneController.updateZone);
router.delete("/:imei", auth.authenticate, zoneController.deleteZone);

module.exports = router;
