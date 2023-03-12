const express = require('express');
router = express.Router();
path = require('path');

const refreshTokenControllers = require('../controllers/refreshTokenController')


router.get('/', refreshTokenControllers.handleRefreshToken)

module.exports = router