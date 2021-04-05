const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.User.findAll({
    include: [db.Specialty, db.Education, db.Schedule],
  }).then((users) => res.json(users));
});

router.post("/new", (req, res) => {
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    address: req.body.address,
    city: req.body.city,
    phone_number: req.body.phone_number,
  }).then((user) => res.json(user));
});

module.exports = router;
