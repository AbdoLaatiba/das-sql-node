const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// get list of users
router.get('/', userController.getPatients);
// create doctor
router.post('/create', userController.createPat);

module.exports = router;