const mongoose = require("mongoose");
const User = require("../models/user");

// display list of doctors

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// get user by id
exports.getUser = async (req, res) => {
  const id = req.params.id;
  const users = await User.find(id);
  res.json(users);
};

// save new user
exports.create = async (req, res) => {
  const reqBody = req.body;
  reqBody._id = new mongoose.Types.ObjectId();
  const user = new User({ _id: mongoose.Types.ObjectId(), ...reqBody });

  const r = await user.save();

  res.json(r);
};

// update user
exports.update = async (req, res) => {
  const id = req.params.id;
  const reqBody = req.body;

  let user = await User.findById(id);
  user = reqBody;

  user.save();
};
