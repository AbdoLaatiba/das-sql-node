const mongoose = require('mongoose');
const { Schema } = mongoose;

const slotSchema = new Schema({
    time: String,
    status:{
        type: Boolean,
        default: false
    }
})

const Slot = mongoose.model('slot', slotSchema);

const scheduleSchema = new Schema({
    date: {
        type: Date,
        // unique: true
        // null: true
    },
    slots:[slotSchema]
})

const Schedule = mongoose.model('schedule', scheduleSchema);

const docSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    specialty: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    cost:{
        type: Number,
        required: true,
    },
    phone_number:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    schedule:[scheduleSchema]
})

const Doctor = mongoose.model("doctor", docSchema);

const patientSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // symptoms: {
    //     type: String,
    //     required: true
    // },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    phone_number:{
        type: String,
        required: true,
    },
})

const Patient = mongoose.model("patient", docSchema);

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    doctor: docSchema,
    patient: patientSchema,
    is_confirmed:{
        type: Boolean,
        default: false
    },
    role: {
        type: String
    }
})


const User = mongoose.model("user", userSchema);

module.exports = { Doctor, User, Patient, Slot, Schedule};
