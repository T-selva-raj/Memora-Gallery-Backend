const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (passport) {
    let options = {};
    options['jwtFromRequest'] = ExtractJwt.fromAuthHeaderAsBearerToken();
    options['secretOrKey'] = CONFIG.Jwt_encryption;

    passport.use(new JwtStrategy(options, async function (jwt_payload, done) {
        if (jwt_payload) return done(null, jwt_payload);
        else return done(null, false);
    }));
}
