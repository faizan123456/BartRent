const jwt = require("jsonwebtoken");

// check if Token exists on request Header and attach token to request as attribute
exports.checkTokenMW = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader.split(" ")[1];
    next();
  } else {
    res.sendStatus(403);
  }
};

// Verify Token validity and attach token data as request attribute
exports.verifyToken = (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      return (req.authData = authData);
    }
  });
};

exports.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name,
    token: this.generateJWT()
  };
};

// Issue Token
exports.signToken = (req, res) => {
  //   const finalUser = new User(req.user);
  return jwt.sign(
    { userId: req.user._id, email: req.user.email, name: req.user.name },
    "secretkey",
    { expiresIn: "5 min" },
    (err, token) => {
      //   console.log("fazool token", token);
      if (err) {
        res.sendStatus(500);
      } else {
        // const tokeng = { token };
        console.log("token fro sign token method", token);
        res
          .header("x-auth-token", token)
          .header("access-control-expose-headers", "x-auth-token")
          .json({ Token: token });
        //   .json({ token });
      }
    }
  );
};

// email: this.email,
// id: this._id,
// name: this.name,

// {
//     required: jwt({
//       secret: "secret",
//       userProperty: "payload",
//       getToken: getTokenFromHeaders
//     }),
