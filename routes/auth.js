const express = require('express');
router = express.Router();
path = require('path');

const authControllers = require('../controllers/authController')


router.post('/', authControllers.handleLogin)

module.exports = router