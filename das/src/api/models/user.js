const mongoose = require("mongoose");
const { Schema } = mongoose;
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
    ref: "Doc",
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

const doctorSchema = new Schema({
  education: String,
  work_history: String,
  address: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    // min: 10,
    // max: 10,
  },
  city: {
    type: String,
    required: true,
  },
  // schedule: [scheduleSchema],
  // image: {},
});

const Doc = mongoose.model("doc", doctorSchema);
const User = mongoose.model("user", userSchema);


module.exports = {Doc, User}
