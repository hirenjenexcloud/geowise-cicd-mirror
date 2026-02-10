const express = require("express");
const router = express.Router();

const alertCtrl = require("../controllers/alert.contoller");
const auth = require('../middlewares/authJWT');

router.post("/", auth.authenticate, alertCtrl.createAlert);
router.get("/history", auth.authenticate, alertCtrl.getAlertsHistory);
router.get("/:imei", auth.authenticate, alertCtrl.getAlertByImei);
router.put("/:imei", auth.authenticate, alertCtrl.updateAlert);
router.delete("/:imei", auth.authenticate, alertCtrl.deleteAlert);

module.exports = router;
