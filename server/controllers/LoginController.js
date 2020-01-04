const Request = require('./../utils/Request')
const DefaultResource = require('./../resources/DefaultResource')
const {User} = require('./../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'My name is Shohan'
module.exports = class LoginController {

    /**
     * Login Method
     * @param req
     * @param res
     * @returns {Json | createServer.NextHandleFunction | * | Promise<any>}
     */
    static login(req, res) {

        const request = new Request(req)
        const email = request.input('email')
        const passport = request.input('password')

        User.findOne({
            where: {email: request.input('email')}
        }).then((user) => {
            if (user) {
                bcryptjs.compare(passport, user.password).then((isMatch) => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name
                        }
                        jwt.sign(payload, secret, {expiresIn: 36000}, (err, token) => {
                            if (err) {
                                res.status(500)
                                    .json({ error: 'Error Signing token'})
                            }

                            res.json(DefaultResource.data({
                                token: `Bearer ${token}`
                            }))
                        })
                    } else {
                        res.status(404).json({
                            error: 'Password is incorrect'
                        })
                    }
                })
                // return res.json(DefaultResource.data(response))
            } else {
                res.json({
                    error: 'Invalid Information'
                })
            }

        }).catch((err) => {
            if (err) {

                res.json({
                    error: 'Invalid Information'
                })
            }
        })


    }
}
