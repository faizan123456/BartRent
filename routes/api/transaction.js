const { TransactionType } = require("./../../models/product/Transaction");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("/transaction");
  // const transaction = await Product.find({}, { category: 1 }).distinct(
  //   "category"
  // );
  const transaction = await TransactionType.find();
  if (transaction) {
    return res.send(transaction);
  } else {
    return res.status(404).send({ msg: "transaction not found." });
  }
});

module.exports = router;
