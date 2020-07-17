const passport = require("passport");
const authService = require("../services/AuthService");
// const user = require("../models/users");
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

module.exports = app => {
  // genuine
  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", { failureRedirect: "/api/login" }),
  //   (req, res) => {
  //     res.redirect("/surveys");
  //   }
  // );

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", {
  //     successRedirect: "/auth/google/success",
  //     failureRedirect: "/auth/google/failure"
  //   }),
  //   (req, res) => {
  //     res.redirect("/surveys");
  //   }
  // );
  // app.get("/auth/google/success", (req, res) => {
  //   authService.signToken(req, res);
  // });
  // const tokentype = authService.getName();
  app.get("/api/current_user", (req, res) => {
    console.log("current user why not", authService.getName());
    // authService.getName;
    // const tokentype = authService.getName;
    // res.send("hruu hasdhfjas dfjasdjfjasjdfj", authService.getName());
    // var token='';
    const token = authService.getName();
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .json({ token });
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
      authService.signToken(req, res);
    }
  );

  app.get("/verify", authService.checkTokenMW, (req, res) => {
    console.log("i am in verify method");
    authService.verifyToken(req, res);
    if (null === req.authData) {
      console.log("jsadjfiasi");
      res.sendStatus(403);
    } else {
      res.json(req.authData);
    }
  });
};
