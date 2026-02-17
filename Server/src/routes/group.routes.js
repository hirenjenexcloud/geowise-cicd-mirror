const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group.controller');
const auth = require('../middlewares/authJWT'); // protect routes

// Group CRUD endpoints
router.post('/',auth.authenticate, groupController.createGroup);
router.get('/',auth.authenticate, groupController.getAllGroups);
router.get('/:id', auth.authenticate, groupController.getGroupById);
router.put('/:id', auth.authenticate, groupController.updateGroup);
router.delete('/:id', auth.authenticate, groupController.deleteGroup);
router.post('/import', auth.authenticate, groupController.importDevices);
router.get('/device/:grpId', auth.authenticate, groupController.getDevicesByGroup);



module.exports = router;
