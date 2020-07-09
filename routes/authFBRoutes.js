const passport = require("passport");

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
      res.redirect("/surveys");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect("/");
  });
};
