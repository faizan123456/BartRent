const mongoose = require("mongoose");
const { ProCatSchema, productCat } = require("../proCat");
const { Schema } = mongoose;

const ProductProfileSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    // required: true,
  },
  images: {
    type: Array,
    // required: false,
  },
  images_want: {
    type: Array,
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
    // default: 0,
    // required: true,
  },
  price: {
    type: Number,
    default: 0,
    // required: true,
  },
});

//mongoose.model("Product", ProductSchema);

const ProductProfile = mongoose.model("ProductProfile", ProductProfileSchema);
exports.ProductProfile = ProductProfile;
exports.ProductProfileSchema = ProductProfileSchema;

async function CreateProductProfile(
  name,
  desc,
  category,
  price,
  numberInStock
) {
  const productProfile = new ProductProfile({
    name,
    desc,
    category,
    price,
    numberInStock,
  });
  const result = await productProfile.save();
  console.log(result);
}
// CreateProductProfile(
//   "shirt",
//   "awesome shirt",
//   // "5f1fcfad4e04d920d41cf8af",
//   new productCat({ name: "Shirts" }),
//   13,
//   3
// );
