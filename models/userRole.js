const mongoose = require("mongoose");
const { Schema } = mongoose;

const userRole = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const userRole = mongoose.model("UserRole", userRole);
exports.Role = userRole;
