const { SwapType } = require("./../../models/product/swapType");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("/swapType");
  // const swapType = await Product.find({}, { category: 1 }).distinct(
  //   "category"
  // );
  const swapType = await SwapType.find();
  if (swapType) {
    return res.send(swapType);
  } else {
    return res.status(404).send({ msg: "swapType not found." });
  }
});

module.exports = router;
