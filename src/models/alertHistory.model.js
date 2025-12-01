const mongoose = require('mongoose');

const AlertHistorySchema = new mongoose.Schema({

    imei: {
        type: String,
        index: true,
        trim: true
    },

    alertType: {
        type: String,
        trim: true
    },

    latitude: {
        type: Number
    },

    longitude: {
        type: Number
    },

    speed: {
        type: Number
    },

    battery: {
        type: Number
    }

}, { timestamps: { createdAt: true, updatedAt: false } , versionKey: false });

module.exports = mongoose.model('alertHistory', AlertHistorySchema, 'alert-history');