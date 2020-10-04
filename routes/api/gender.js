const { Gender } = require("./../../models/gender");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("/gender");
  // const gender = await Product.find({}, { category: 1 }).distinct(
  //   "category"
  // );
  const gender = await Gender.find();
  if (gender) {
    return res.send(gender);
  } else {
    return res.status(404).send({ msg: "gender not found." });
  }
});

module.exports = router;
