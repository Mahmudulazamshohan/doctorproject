const Request = require('./../utils/Request')
const DefaultResource = require('./../resources/DefaultResource')
const {User} = require('./../models')
const bcryptjs = require('bcryptjs')
module.exports = class AuthController {
    static showUser(req, res){
        return res.json(DefaultResource.data({user:req.user}))
    }
}
