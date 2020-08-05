const express = require("express");
const router = express.Router();
const { Product } = require("../../models/Product");
const { productCat } =require("../../models/proCat");

router.get("/", async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const products = await Product.find({ ...category });
  if (products) {
    return res.send(products);
  } else {
    return res.status(404).send({ msg: "Products not found." });
  }
});

router.get("/:id", async (req, res) => {
  
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    res.send(product);
    } else {
    res.status(404).send({ msg: "Product Not found." });
  }
});

router.post("/", async (req, res) => {
  console.log('backend product post',req.body.product);

  const categoryId = req.body.product.category;
  const categoryName = await productCat.findById(categoryId);
  
  const product = new Product({
    name: req.body.product.name,
    price: req.body.product.price,
    // image: req.body.image,
    category: categoryName,
    numberInStock: req.body.product.numberInStock,
    desc: req.body.product.desc
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

router.put("/:id", async (req, res) => {
  const categoryId = req.body.categoryId;
  const category = await productCat.findById(categoryId);
  console.log("CatId...", category);

  const productId = req.params.id;
  const update = req.body;  
  console.log("Updata...", update);
  const updated = (await Product.findByIdAndUpdate(productId, {
    name: update.name,
    price: update.price,
    // image: req.body.image,
    category: category,
    numberInStock: update.numberInStock,
    desc: update.desc
  }));
  if(updated) {
    return res
    .status(200)
    .send({msg: "Product Updated Successfully!!!!", data: updated});
  }
  res.status(500).send({msg: "Sorry! Products has not been Updated!"});
});

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
