const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group.controller');
const auth = require('../middlewares/authJWT'); // protect routes

// Group CRUD endpoints
router.post('/', groupController.createGroup);
router.get('/', groupController.getAllGroups);
router.get('/:id', auth.authenticate, groupController.getGroupById);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);
router.post('/import', auth.authenticate, groupController.importDevices);
router.get('/device/:grpId', auth.authenticate, groupController.getDevicesByGroup);



module.exports = router;
