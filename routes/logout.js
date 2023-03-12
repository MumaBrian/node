const express = require('express');
router = express.Router();
path = require('path');

const logoutControllers = require('../controllers/logoutController')


router.get('/',logoutControllers.handleLogout)

module.exports = router