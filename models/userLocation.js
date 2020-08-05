const mongoose = require("mongoose");

const { Schema } = mongoose;

const userLocation = new Schema({
  country_id: "String",
  state_id: "String",
  district_id: "String",
  city_id: "String",
  postalCode: Number,
  streetAddress: "String"
});

mongoose.model("UserLocation", userLocation);
