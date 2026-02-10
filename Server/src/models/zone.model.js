const { required } = require("joi");
const mongoose = require("mongoose");

const latLngSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
}, { _id: false });

const zoneSchema = new mongoose.Schema({
  imei: {type: String, required: true, trim: true},
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  notes: { type: String, default: "", trim: true },

  latLongArr: {
    type: [latLngSchema],
    validate: {
      validator: function (val) {
        return val.length >= 3;
      },
      message: "latLongArr must contain at least 3 locations"
    },
    required: true
  }

}, { timestamps: true , versionKey: false });

module.exports = mongoose.model("Zone", zoneSchema);
