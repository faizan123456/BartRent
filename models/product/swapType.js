const mongoose = require("mongoose");
const { Schema } = mongoose;

const swapTypeSchema = new Schema({
  name: {
    type: String,
  },
});

const SwapType = mongoose.model("SwapType", swapTypeSchema);
exports.swapTypeSchema = swapTypeSchema;
exports.SwapType = SwapType;

async function CreateSwapType(name) {
  const swapType = new SwapType({
    name,
  });
  const result = await swapType.save();
  console.log(result);
}
// CreateSwapType("Product");
// CreateSwapType("Service");
// CreateSwapType("Product To Service");
// CreateSwapType("Service To Product");
