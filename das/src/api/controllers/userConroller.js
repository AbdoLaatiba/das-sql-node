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
  reqBody._id = new mongoose.Schema.Types.ObjectId();
  const user = new User({ _id: mongoose.Schema.Types.ObjectId(), ...reqBody });

  const user = await user.save();

  res.json(user);
};

// update user
exports.create = async (req, res) => {
  const id = req.params.id;
  const reqBody = req.body;

  const user = await User.findById(id);
  user = reqBody;

  user.save();
};
