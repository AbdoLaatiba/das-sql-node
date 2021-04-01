const mongoose = require("mongoose");
const { Schema } = mongoose;
const Doctor = require("./doctor");
const Patient = require("./doctor");

const appointmentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  //   doctor: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Doctor",
  //   },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor.slot",
  },
  is_done: {
    type: Boolean,
    default: false,
  },
});

const Patient = mongoose.model("appointment", patientSchema);

module.exports = Patient;
