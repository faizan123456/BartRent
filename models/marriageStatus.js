const mongoose = require("mongoose");

const { Schema } = mongoose;

const marriageStatus = new Schema({
  id: String,
  name: String
});

mongoose.model("MarriageStatus", marriageStatus);
