const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userConroller');

router.get('/', UserController.getUsers);
router.post('/create', UserController.create);

module.exports = router;