const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("boom");
const { config } = require("../../config");
import User from '../../models/User';

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload, cb) {

      try {
        const user = await User.findAll({
            where: {
              email: tokenPayload.sub
            }
          })
        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);