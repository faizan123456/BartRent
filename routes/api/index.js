const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
<<<<<<< HEAD
router.use("/loc", require("./location"));
=======
router.use("/products", require("./productRoute"));
>>>>>>> 161f91c40a3bb07fd76ed54f09b22c982f212afc

module.exports = router;