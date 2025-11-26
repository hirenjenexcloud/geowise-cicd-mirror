const express = require("express");
const router = express.Router();
const zoneController = require("../controllers/zone.controller");

router.post("/", zoneController.createZone);
router.get("/", zoneController.getAllZones);
router.get("/:imei", zoneController.getZoneByImei);
router.put("/:imei", zoneController.updateZone);
router.delete("/:imei", zoneController.deleteZone);

module.exports = router;
