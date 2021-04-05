const mongoose = require('mongoose');
const {User} = require('../models/user');
const {Doctor} = require('../models/user');
const {Patient} = require('../models/user');




exports.getUsers = async function(req, res){
    const users = await User.find();
    res.send(users);

}

exports.getDoctors = async function(req, res){
    const users = await User.find({role: "doctor"});
    res.send(users);

}

exports.getPatients = async function(req, res){
    const users = await User.find({role: "patient"});
    res.send(users);

}



exports.createDoc = async function(req, res){

    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role : req.body.role
    });


    const doctor = new Doctor({
        _id: mongoose.Types.ObjectId(),
        education: req.body.education,
        specialty: req.body.specialty,
        address: req.body.address,
        cost: req.body.cost,
        city: req.body.city,
        phone_number: req.body.phone_number,
        image: req.file.path
    });

    // doctor.save();

    user.doctor = doctor;

    user.save((err, data) => {
        if(err){
            res.status(400).send(err);
        }
        res.status(200).json(data);
    })
    
}

exports.createPat = async function(req, res){

    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });


    const patient = new Patient({
        _id: mongoose.Types.ObjectId(),
        // symptoms: req.body.symptoms,
        address: req.body.address,
        city: req.body.city,
        phone_number: req.body.phone_number,
    });


    user.patient = patient;

    user.save((err, data) => {
        if(err){
            res.status(400).json(err);
        }
        res.status(200).json(data);
    })

}

exports.create = async function(req, res){

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "admin"
    });

    user.save((err, data) => {
        if(err){
            res.status(400).json(err);
        }
        res.status(400).json(data);
    })

    res.send(user);
}