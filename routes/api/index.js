const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
 
router.use("/loc", require("./location"));
 
router.use("/products", require("./productRoute"));
 
router.use("/categories", require("./categoriesRoute"));
 
module.exports = router;
