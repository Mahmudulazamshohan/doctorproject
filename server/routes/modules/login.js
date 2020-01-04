const express = require('express');
var router = express.Router();
var LoginController = require('./../../controllers/LoginController')
var DefaultMiddleware = require('./../../auth/middleware/DefaultMiddleware')

router.get('/',LoginController.login)

module.exports = router
