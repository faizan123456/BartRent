const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { gender } = require("./gender");
const { Schema } = mongoose;

const UsersSchema = new Schema({
  googleId: String,
  facebookId: String,
  email: String,
  name: String,
  hash: String,
  salt: String,
  //
  last_name: String,
  // gender_id:String,
  // DOB: DateTime,
  // alternate_email: String,
  // phone: String,
  // alternate_phone: String,
  // marriageStatus_id: String,
  // signUpDate: DateTime,
  // profile_pic_path: String,
  // cover_pic_path: String,
  // Biography: String,
  // user_role_id: String,

  isAdmin: Boolean,
  gender_id: {
    type: gender,
  },
  address: {
    type: new mongoose.Schema({
      country_id: "String",
      state_id: "String",
      city_id: "String",
      postalCode: Number,
      streetAddress: "String",
    }),
  },
});

UsersSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UsersSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      name: this.name,
      isAdmin: this.isAdmin,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    "secret"
  );
};

UsersSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    email: this.email,
    name: this.name,
    // address: this.address.country_id,
    token: this.generateJWT(),
  };
};

const User = mongoose.model("Users", UsersSchema);
exports.User = User;
