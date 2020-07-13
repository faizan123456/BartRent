const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

//POST new user route (optional, everyone has access)
router.post("/", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }
  if (!user.name) {
    return res.status(422).json({
      errors: {
        name: "is required"
      }
    });
  }
  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  const finalUser = new Users(user);
  const Token = finalUser.generateJWT();
  console.log(Token);
  // finalUser.email = user.email;
  finalUser.setPassword(user.password);
  finalUser.name = user.name;

  return finalUser.save().then(() =>
    res
      .header("x-auth-token", Token)
      .header("access-control-expose-headers", "x-auth-token")
      .json({ user: finalUser.toAuthJSON() })
  );
});
// // .send()
// .header("x-auth-token", Token)
//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;
  console.log(user);
  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
        console.log(user.token);

        return res.json({ user: user.toAuthJSON() });
      }

      return status(400).info;
    }
  )(req, res, next);
});

//GET current route (required, only authenticated users have access)
// auth.required,
// router.get("/saqib", (req, res) => {
//   console.log("Hello Saqib");
//   res.status(200).send("Hii G ");
// });
router.get("/current", auth.required, (req, res) => {
  console.log("auth.required");
  const {
    payload: { id }
  } = req;

  // console.log(req);
  // res.send({ hi: saq });

  return Users.findById(id).then(user => {
    if (!user) {
      return res.sendStatus(400);
    }

    return res.json({ user: user.toAuthJSON() });
  });
});

module.exports = router;
