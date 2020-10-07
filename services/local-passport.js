const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Users = mongoose.model("Users");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]",
    },
    (email, password, done) => {
      console.log("passprt local email", email, "passport", password);
      Users.findOne({ email })
        .then((user) => {
          if (!user || !user.validatePassword(password)) {
            console.log("yes user find");
            return done(null, false, {
              errors: { "email or password": "is invalid" },
            });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);
