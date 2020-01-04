const {Strategy, ExtractJwt} = require('passport-jwt')
const secret = 'My name is Shohan'
const {User} = require('../models')
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}
/**
 * Passport Verification With user inforamtion
 * @param passport
 */
module.exports = passport => {
    passport.use(new Strategy(opts, (payload, done) => {
        User.findByPk(payload.id).then((user) => {
            if (user) {
                return done(null, user)
            }
            return done(null, false)
        }).catch((err) => console.error(err))
    }))
}
