const express = require("express");
const router = express.Router();
const multer  = require("multer");

// Multer: Storage Path
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname );
  }
});

//Multer: Image filtering
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer: Image upload method
const upload = multer({
  storage: storage,
  //dest: './uploads/'
  limits: { 
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
}).array('images', 10);

//const multipart =  require('connect-multiparty');
const { Product } = require("../../models/Product");
const { productCat } =require("../../models/proCat");

// get All Products
router.get("/", async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const products = await Product.find({ ...category });
  if (products) {
    return res.send(products);
  } else {
    return res.status(404).send({ msg: "Products not found." });
  }
});

// Product Details
router.get("/:id", async (req, res) => {
  
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    res.send(product);
    } else {
    res.status(404).send({ msg: "Product Not found." });
  }
});

// Create new Products
router.post("/", upload, async (req, res) => {
  console.log("images...= ", req.files, "======" )
  console.log("BODY...= ", req.body, "======" )
  const categoryId = req.body.category;
  const categoryName = await productCat.findById(categoryId);
  
  const product = new Product({ 
    
    //_id: new mongoose.Types.ObjectId(),

    name: req.body.name,
    price: req.body.price,
    images: req.files,
    category: categoryName,
    numberInStock: req.body.numberInStock,
    desc: req.body.desc
  });
  //console.log(product);
  const newProduct = await product.save();
  //console.log(newProduct);
  if (newProduct) {
    return res
      .status(200)
      .send({ msg: "New Product created.", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in creating product." });
});

// Update Products
router.patch("/:id", upload, async (req, res) => {
  console.log("Req Data...", req.body);
  console.log('files... ', req.files)

  const categoryId = req.body.category;
  const category = await productCat.findById(categoryId);
  console.log("CatId...", category);

  const productId = req.params.id;
  const update = req.body;  
  console.log("Updata... ", update);
  if(req.files.length > 0) {
    console.log('req File...= ', req.files)
    const updated = await (Product.findByIdAndUpdate(productId, {
      name: update.name,
      price: update.price,
      images: req.files,
      category: category,
      numberInStock: update.numberInStock, 
      desc: update.desc
    }));
  }
  else {
    console.log('req File Else... ', req.files)
    const updated = await (Product.findByIdAndUpdate(productId, {
      name: update.name,
      price: update.price,
      //images: req.files,
      category: category,
      numberInStock: update.numberInStock, 
      desc: update.desc
    }));
  }
  console.log('udated.... ', updated)
  if(updated) {
    //console.log('udated... ', updated)
    return res
    .status(200)
    .send({msg: "Product Updated Successfully!!!!", data: updated});
  }
  
  res.status(500).send({msg: "Sorry! Products has not been Updated!"});
});

// Delete Products
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  const deleted = await Product.findByIdAndRemove(productId);
  if(deleted) {
    return res
    .status(200)
    .send({msg: "Product has been removed Successfully!"});
  }
    res.send({msg: "Sorry! Product has not been deleted!"});
});



module.exports = router;
