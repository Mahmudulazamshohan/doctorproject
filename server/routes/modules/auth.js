const express = require('express');
var router = express.Router();
var AuthController = require('./../../controllers/AuthController')
var DefaultMiddleware = require('./../../auth/middleware/DefaultMiddleware')

router.post('/user',DefaultMiddleware.middleware(),AuthController.showUser)

module.exports = router
