const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("Users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAppId,
      clientSecret: keys.facebookAppSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"]
      // proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          //return null or existing user obj.
          //We Already Have Record with the Given User.
          done(null, existingUser);
        } else {
          //Don't have record in Db.create New User
          new User({
            facebookId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
