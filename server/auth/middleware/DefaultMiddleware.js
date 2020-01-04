const passport = require('passport')
module.exports = class DefaultMiddleware {

    static middleware() {
        return passport.authenticate('jwt', {session: false})
    }
}
