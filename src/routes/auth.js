const { Router } = require('express');
const router = Router();
const { config } = require("../config");
require("../utils/strategies/basic");
const passport = require("passport");
const boom = require("boom");
const jwt = require("jsonwebtoken");
router.post("/sigin",  async function sigin(req, res,next) 
{
    passport.authenticate("basic", function(error, user) {
        try {
          if (error || !user) {
            return res.status(401).json({
              message : 'Acceso incorrecto:usuario o contraseña inválidos',
            })
          
    
          }
          req.login(user, { session: false }, async function(error) {
            if (error) {
              next(error);
            }
            const payload = { sub: user.name, email: user.email };
            const token = jwt.sign( payload, config.authJwtSecret, {
                expiresIn: 86400 
            });
    
            return res.status(202).json({ access_token: token });
          });
        } catch (error) {
          next(error);
        }
      })(req, res, next);
    });
module.exports = router;
