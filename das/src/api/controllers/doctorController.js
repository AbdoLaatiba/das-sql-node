const mongoose = require("mongoose");
const User = require("../models/user");
const Doctor = require("../models/doctor");

// display list of doctors

exports.getDocs = async (req, res) => {
  const users = await User.find().populate("doctor_info");
  res.json(users);
};

// get user by id
exports.getDoc = async (req, res) => {
  const id = req.params.id;
  const users = await User.find(id);
  res.json(users);
};

// save new user
exports.create = async (req, res) => {
  const reqBody = req.body;
  const id = req.params.id;
  let user = User.findById(id);
  
  const doc = new Doctor(reqBody);

  doc.save().then((err, r) =>{
      if (err) {
          res.status(400).json(err);
      }
      user.doctor_info = doc._id;
      user.update({_id: id},{doctor_info : doc._id}).then((err, r)=>{
          if(err){
              res.status(400).json(err);
          }
          res.status(200).json(r);
      })
  })

};

// update user
// exports.update = async (req, res) => {
//   const id = req.params.id;
//   const reqBody = req.body;

//   let user = await User.findById(id);
//   user = reqBody;

//   user.save();
// };
