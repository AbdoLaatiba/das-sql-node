const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getDocs);
router.post('/create', doctorController.create);

module.exports = router;