const mongoose = require("mongoose");
const { ProCatSchema, productCat } = require("../proCat");
const { transactionTypeSchema, TransactionType } = require("./Transaction");
const { swapTypeSchema, SwapType } = require("./swapType");
const { ProductProfileSchema, ProductProfile } = require("./productProfile");
const { rentalFrequencySchema } = require("./rentalFrequency");

const { Schema } = mongoose;

const ProductModelSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  transaction: {
    type: transactionTypeSchema,
    required: true,
  },
  swapType: {
    type: swapTypeSchema,
    required: true,
  },

  productProfile: [
    {
      type: ProductProfileSchema,
      required: true,
    },
  ],
  price: Number,
  postalCode: Number,
  city: String,
  fullAddress: String,
  productOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  rentalFrequency: {
    type: rentalFrequencySchema,
  },
});

//mongoose.model("Product", ProductSchema);

const ProductModel = mongoose.model("productModel", ProductModelSchema);
exports.ProductModel = ProductModel;
exports.ProductModelSchema = ProductModelSchema;

async function CreateProductModel(transaction, swapType, productProfile) {
  const productModel = new ProductModel({
    transaction,
    swapType,
    productProfile,
  });
  const result = await productModel.save();
  console.log(result);
}
// CreateProductModel(
//   new TransactionType({ name: "Barter/Swap" }),
//   new SwapType({ name: "Product" }),
//   [
//     new ProductProfile({
//       name: "shirt",
//       desc: "This is awesome shirt",
//       category: new productCat({ name: "Shirts" }),
//       price: 12,
//       numberInStock: 3,
//     }),
//     new ProductProfile({
//       name: "Court",
//       desc: "I want Court",
//       category: new productCat({ name: "Clothing" }),
//       price: 12,
//       numberInStock: 3,
//     }),
//   ]
// );
