const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("Users");

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => done(null, user));
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("google access token", accessToken);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //return null or existing user obj.
        //We Already Have Record with the Given User.
        done(null, existingUser);
      } else {
        //Don't have record in Db.create New User
        const user = await new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName
        }).save();
        // const Token = user.generateJWT();
        // console.log(Token);
        done(null, user);
      }
    }
  )
);

// UnhandledPromiseRejectionWarning: ValidationError: Users validation
// failed: name: Cast to string failed for value "{ familyName: 'Mehmood', givenName: 'Saqib' }" at path "name"
