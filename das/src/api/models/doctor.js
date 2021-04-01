const mongoose = require("mongoose");
const { Schema } = mongoose;
const Patient = require("./doctor");

const eduSchema = new Schema({ name: { type: String } });
const whSchema = new Schema({ name: { type: String }, date: Date });
const appointmentSchema = new Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  is_confirmed: {
    type: Boolean,
    default: false,
  },
});
const slotSchema = new Schema({
  time: String,
  appointment: [appointmentSchema],
});
const scheduleSchema = new Schema({ date: { type: Date }, slot: [slotSchema] });

const doctorSchema = new Schema({
  education: [eduSchema],
  work_history: [whSchema],
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
    min: 10,
    max: 10,
  },
  city: {
    type: Number,
    required: true,
  },
  schedule: [scheduleSchema],
  image: {},
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
