const passport = require("passport");
const authService = require("../services/AuthService");

module.exports = app => {
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email", "user_likes"]
      // scope: ["user_friends", "manage_pages"]
    })
    //, {
    //   scope: ["profile", "email"]
    // }
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/api/login" }),
    (req, res) => {
      authService.signToken(req, res);
      // res.redirect("/surveys");
    }
  );

  app.get("/api/current_user", (req, res) => {
    // res.send(req.user);

    console.log("current user why not", authService.getName());
    const token = authService.getName();
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .json({ token });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect("/");
  });
};
