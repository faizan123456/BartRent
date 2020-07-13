const passport = require("passport");
const authService = require("../services/AuthService");
// const user = require("../models/users");
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

module.exports = app => {
  // app.get(
  //   "/auth/google",
  //   passport.authenticate("google", {
  //     scope: ["profile", "email"]
  //   })
  // );

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", { failureRedirect: "/api/login" }),
  //   (req, res) => {
  //     res.redirect("/surveys");
  //   }
  // );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //////////////////////////copied code

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      session: false,
      scope: ["profile", "email"],
      accessType: "offline",
      approvalPrompt: "force"
    })
  );

  // callback url upon successful google authentication

  app.get(
    "/auth/google/callback/",
    passport.authenticate("google", { session: false }),
    (req, res) => {
      // const user = req.user;
      // console.log("Gooogle User ki id", user);
      authService.signToken(req, res);
      // console.log("fron Sign Toke method", token);
      // const finalUser = new User();
      // console.log("final user", finalUser);
      // const Token = finalUser.generateJWT();
      // console.log("token via google", Token);
      // res.json({ user: finalUser.toAuthJSON() });
    }
  );

  // route to check token with postman.
  // using middleware to check for authorization header
  //   app.get("/verify", authService.checkTokenMW, (req, res) => {
  //     authService.verifyToken(req, res);
  //     if (null === req.authData) {
  //       res.sendStatus(403);
  //     } else {
  //       res.json(req.authData);
  //     }
  //   });
};
