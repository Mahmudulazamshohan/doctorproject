const express = require('express');
var router = express.Router();
var SignupController = require('./../../controllers/SignupController')

router.get('/',SignupController.signup)

module.exports = router
