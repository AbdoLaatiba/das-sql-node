const mongoose = require("mongoose");
const { Schema } = mongoose;
const Doctor = require("./doctor");
const Patient = require("./patient");

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
  role: {
    type: String,
  },
  doctor_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  patient_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  is_confirmed: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
