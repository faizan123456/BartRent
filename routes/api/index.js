const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));

router.use("/genders", require("./gender"));

router.use("/loc", require("./location"));

router.use("/products", require("./productRoute"));

router.use("/categories", require("./categoriesRoute"));

router.use("/transactions", require("./transaction"));

router.use("/swapTypes", require("./swapType"));

router.use("/productListing", require("./productListing"));

module.exports = router;
