const mongoose = require("mongoose");

const { Schema } = mongoose;

const gender = new Schema({
  name: String,
});

const GenderModel = mongoose.model("Gender", gender);
exports.Gender = GenderModel;
exports.gender = gender;

async function createGender(name) {
  const gender = new GenderModel({
    name,
  });
  const result = await gender.save();
  console.log(result);
}
// createGender("Male");
// createGender("FeMale");
// createGender("Others");
