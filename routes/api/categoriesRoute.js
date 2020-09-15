const {productCat}= require('./../../models/proCat');
const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    console.log('/categories');
    // const categories = await Product.find({}, { category: 1 }).distinct(
    //   "category"
    // );
    const categories = await productCat.find();
    if (categories) {
      return res.send(categories);
    } else {
      return res.status(404).send({ msg: "Categories not found." });
    }
  });

  
  module.exports = router;