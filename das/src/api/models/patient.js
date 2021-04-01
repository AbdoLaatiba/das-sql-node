const mongoose = require("mongoose");
const { Schema } = mongoose;
const Doctor = require("./doctor");

const feedbackSchema = new Schema({
  name: { type: String },
  date: { type: Date, default: Date.now() },
  rating: Number,
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
});

const patientSchema = new Schema({
  phone_number: {
    type: Number,
    min: 10,
    max: 10,
  },
  symptoms: {
    type: String,
  },
  feedback: [feedbackSchema],
});

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
