const mongoose = require("mongoose");
const { ProCatSchema } = require("./proCat");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    // required: true,
  },
  images: {
    type: Array,
    // required: false,
  },
  category: {
    type: ProCatSchema,
    // required: true,
  },
  desc: {
    type: String,
    // required: true,
  },
  numberInStock: {
    type: Number,
    default: 0,
    // required: true/,
  },
  price: {
    type: Number,
    default: 0,
    // required: true,
  },
});

//mongoose.model("Product", ProductSchema);

const products = mongoose.model("Product", ProductSchema);
exports.Product = products;
