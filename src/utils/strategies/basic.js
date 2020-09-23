import User from '../../models/User';

const { BasicStrategy } = require("passport-http");

const bcrypt = require("bcrypt");
const passport = require("passport");
const boom = require("boom");
passport.use(
    new BasicStrategy(async function(username, password, cb) {
      try {
        const user = await User.findOne({
               where: {
                 email: username
               }
             })

        if (!user) {
          return cb(boom.unauthorized(), false);
        }
        bcrypt.compare(password, user.password, (err,result) => {
          if(err)
          {
           throw err;
          }  
          if(result === true) {
              return cb(null,user)
          }else{
              return cb(boom.unauthorized(), false);
          }
      })
        // if (!(bcrypt.compare(password, user.password))) {
        //   return cb(boom.unauthorized(), false);
        // }
        
        // return cb(null, user);
      } catch (error) {

        return cb(error);
      }
    })
  );
