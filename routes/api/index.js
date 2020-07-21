const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/products", require("./productRoute"));

module.exports = router;