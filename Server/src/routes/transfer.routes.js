const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfer.controller');
const auth = require('../middlewares/authJWT'); 

router.post('/', auth.authenticate, transferController.transferDevices);

module.exports = router;