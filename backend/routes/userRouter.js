const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// get list of users
router.get('/', userController.getUsers);
// create user admin
router.post('/create', userController.create);

module.exports = router;