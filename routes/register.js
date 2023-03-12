const express = require('express');
router = express.Router();
path = require('path');

const registerController = require('../controllers/registerController')


router.post('/', registerController.handleNewUser)

module.exports = router