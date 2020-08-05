const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
<<<<<<< HEAD
router.use("/loc", require("./location"));
=======
router.use("/products", require("./productRoute"));
<<<<<<< HEAD
router.use("/categories", require("./categoriesRoute"));
=======
>>>>>>> 161f91c40a3bb07fd76ed54f09b22c982f212afc
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202

module.exports = router;