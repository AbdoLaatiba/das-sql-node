const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const doctorController = require('../controllers/doctorController');
const upload = require('../config/multer');


// get list of users
router.get('/', userController.getDoctors);
// create doctor
router.post('/create', upload.single('image'), userController.createDoc);

router.post('/schedule/create/:id', doctorController.createSchedule);

module.exports = router;