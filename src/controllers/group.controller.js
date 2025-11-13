const Group = require('../models/group.model');
const logger = require('../utils/logger');

// ✅ Create new group
exports.createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json({ status: true, message: 'Group created successfully', data: group });
  } catch (err) {
    logger.error('Create group error:', err);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

// ✅ Get all groups
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json({ status: true, message: 'Groups fetched successfully', data: groups });
  } catch (err) {
    logger.error('Fetch groups error:', err);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

// ✅ Get group by ID
exports.getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ status: false, message: 'Group not found' });
    res.status(200).json({ status: true, message: 'Group fetched successfully', data: group });
  } catch (err) {
    logger.error('Fetch group error:', err);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

// ✅ Update group
exports.updateGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!group) return res.status(404).json({ status: false, message: 'Group not found' });
    res.status(200).json({ status: true, message: 'Group updated successfully', data: group });
  } catch (err) {
    logger.error('Update group error:', err);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

// ✅ Delete group
exports.deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) return res.status(404).json({ status: false, message: 'Group not found' });
    res.status(200).json({ status: true, message: 'Group deleted successfully' });
  } catch (err) {
    logger.error('Delete group error:', err);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};
