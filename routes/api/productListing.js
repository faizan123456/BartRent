const {
  ProductModel,
  ProductModelSchema,
} = require("./../../models/product/ProductModel");
const { productCat } = require("../../models/proCat");

const express = require("express");
const router = express.Router();

const multer = require("multer");

// Multer: Storage Path
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//Multer: Image filtering
const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer: Image upload method
const upload_want = multer({
  storage: storage,
  //dest: './uploads/'
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const upload = multer({
  storage: storage,
  //dest: './uploads/'
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
}).fields([
  { name: "images", maxCount: 10 },
  { name: "images_want", maxCount: 10 },
]);
// .array("images", 10)

const upload2 = (req, res) => {
  console.log("G bhai G ", req.body);
  multer({
    storage: storage,
    // dest: "./uploads/",
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  }).array("images", 10);

  console.log("After g ");
  // upload();
};
router.get("/", async (req, res) => {
  console.log("/product Model");
  // const transaction = await Product.find({}, { category: 1 }).distinct(
  //   "category"
  // );
  const productModel = await ProductModel.find();
  if (productModel) {
    return res.send(productModel);
  } else {
    return res.status(404).send({ msg: "product not found." });
  }
});

router.post("/", upload, async (req, res) => {
  console.log("images...= ", req.files, "======");

  console.log("productListing--->back End---->", req.body.numberInStock);
  const categoryId = req.body.category;
  const categoryName = await productCat.findById(categoryId);

  const categoryId_want = req.body.category_want;
  var categoryName_want = null;
  console.log("Id want", req.body.categoryId_want);
  if (req.body.categoryId_want !== undefined) {
    console.log("If Id want", req.body.categoryId_want);

    categoryName_want = await productCat.findById(categoryId_want);
    console.log(categoryName_want, "category_want");
  }

  // console.log("Number   In    Stock", NumberInStock);
  if (req.body.numberInStock == "undefined") {
    console.log(
      "iffff sdfasdjkf asdfj asdfj as kdfaksldflkasld;fkas;ldfa;ksdfkasf;kas;dkfas;k "
    );
    var NumberInStock = 1;
  } else {
    console.log("asd jkf asdf as dfkas jdf as f asf as fj");
    NumberInStock = req.body.numberInStock;
  }
  // if (!req.body.numberInStock === "undefined") {
  //   console.log("............... number in stock ...........if");
  //   req.body.numberInStock = 1;
  // }

  const product = new ProductModel({
    price: req.body.swapValue,
    postalCode: req.body.postalCode,
    city: req.body.city,
    fullAddress: req.body.fullAddress,
    rentalFrequency: {
      name: req.body.rentalFrequency,
    },

    transaction: {
      name: req.body.transaction,
    },
    swapType: {
      name: req.body.swapType,
    },
    productProfile: [
      {
        name: req.body.title,
        desc: req.body.description,
        numberInStock: NumberInStock,
        price: req.body.price,
        category: categoryName,
        // images_want: req.files,
        // images: req.body.images,
        images: req.files,
      },
      {
        name: req.body.title_want,
        desc: req.body.description_want,
        price: req.body.price_want,
        category: categoryName_want,
        images_want: req.files,
      },
    ],
  });
  await product.save();
  const newProduct = await product.save();
  //console.log(newProduct);
  if (newProduct) {
    return res
      .status(200)
      .send({ msg: "New Product created.", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in creating product." });
});

module.exports = router;
