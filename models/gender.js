const mongoose = require("mongoose");

const { Schema } = mongoose;

const gender = new Schema({
  name: String
});

const GenderModel = mongoose.model("Gender", gender);
exports.Gender = GenderModel;
exports.gender = gender;
