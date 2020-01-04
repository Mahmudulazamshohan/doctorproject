const Request = require('./../utils/Request')
const DefaultResource = require('./../resources/DefaultResource')
const {User} = require('./../models')
const bcryptjs = require('bcryptjs')
module.exports = class SignupController {
    /**
     * Signup Method
     * @param req
     * @param res
     */
    static signup(req, res) {
        var request = new Request(req)
        var password = bcryptjs.hashSync(request.input('password'), bcryptjs.genSaltSync(10))
        // Create User model
        User.create({
            name: request.input('name'),
            email: request.input('email'),
            password,
        }).then((user) => {
            return res.json(DefaultResource.data({
                user
            }))
        }).catch((err) => {
            return res.json(err)
        })
    }
}
