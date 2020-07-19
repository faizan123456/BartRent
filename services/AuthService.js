const jwt = require("jsonwebtoken");

// check if Token exists on request Header and attach token to request as attribute
exports.checkTokenMW = (req, res, next) => {
  console.log("checkTokenMW");
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  console.log("outside the checkTowkenMW", bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader.split(" ")[1];
    next();
  } else {
    res.sendStatus(403);
  }
};

// Verify Token validity and attach token data as request attribute
exports.verifyToken = (req, res) => {
  console.log("verify token", req.token);
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      return (req.authData = authData);
    }
  });
};

var _jwtSign = "";

// var jwtSign = 'I shall not be null'

// exports.setName = function(_jwtSign) {
//   //validate the name...
//   jwtSign = _jwtSign;
// };
exports.getName = function() {
  console.log("get Name value", _jwtSign);
  return _jwtSign;
};

// Issue Token
exports.signToken = (req, res) => {
  //   const finalUser = new User(req.user);
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    "secretkey",
    // { expiresIn: "5 min" },
    (err, token) => {
      if (err) {
        res.sendStatus(500);
      } else {
        _jwtSign = token;
        // console.log("value of token", _jwtSign);
        // res.json({ token });
        res.redirect("/");

        // res.json(token);
      }
      //   console.log("fazool token", token);
      //   if (err) {
      //     res.sendStatus(500);
      //   } else {
      //     // const tokeng = { token };
      //     console.log("token fro sign token method", token);
      //     res
      //       .header("x-auth-token", token)
      //       .header("access-control-expose-headers", "x-auth-token")
      //       .json({ Token: token });
      //     //   .json({ token });
      //   }
    }
  );
  return _jwtSign;
};

// module.exports = {
//      jwtSign
//   };
// email: this.email,
// id: this._id,
// name: this.name,

// {
//     required: jwt({
//       secret: "secret",
//       userProperty: "payload",
//       getToken: getTokenFromHeaders
//     }),
