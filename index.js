//local auth
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const errorHandler = require("errorhandler");

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: "passport-tutorial",
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false
//   })
// );

if (!isProduction) {
  app.use(errorHandler());
}

// google facebook
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );

app.use(function(req, res, next) {
  let allowedOrigins = ["*"]; // list of url-s
  let origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Expose-Headers", "Content-Disposition");
  next();
});
app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("debug", true);

require("./models/Users");
require("./services/google-passport");
require("./services/fb-passport");
require("./services/local-passport");
require('./models/proCat');
require('./models/Product');
require("./models/country");
require("./models/state");
// require("./models/district");
require("./models/city");

app.use(require("./routes"));
//local auth

require("./routes/authGoogleRoutes")(app);
require("./routes/authFBRoutes")(app);

//Error handlers & middlewares
if (!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on http://localhost:5000/"));
