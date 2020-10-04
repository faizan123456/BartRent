import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getProduct, saveProduct } from "../services/productService";
import { getCategories } from "../services/proCatService";

class ProductForm extends Form {
  state = {
    data: {
      name: "",
      desc: "",
      images: null,
      categoryId: "",
      numberInStock: "",
      price: "",
    },
    category: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    images: Joi.any().required().label("Images"),
    price: Joi.number().required().min(1).label("Price"),
    desc: Joi.string().required().label("Description"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
  };

  async populateCategory() {
    const { data: category } = await getCategories();
    this.setState({ category });
  }

  async populateProduct() {
    try {
      const productId = this.props.match.params.id;
      if (productId === "new") return;

      const { data: product } = await getProduct(productId);
      console.log("testesss..... ", product);
      this.setState({ data: this.mapToViewModel(product) });
      console.log("imgs... ", this.state.data.images);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateCategory();
    await this.populateProduct();
  }

  mapToViewModel(product) {
    return {
      _id: product._id,
      name: product.name,
      desc: product.desc,
      price: product.price,
      images: product.images,
      categoryId: product.category._id,
      numberInStock: product.numberInStock,
    };
  }

  doSubmit = async () => {
    console.log("submit....");
    console.log("dataaaa....", this.state.data);

    const formData = new FormData();
    //var count = 0;
    console.warn(">> formData Before Loop >> ", formData.getAll("images"));
    //if(count )
    for (var x = 0; x < this.state.data.images.length; x++) {
      console.log("StateForm... = ", this.state.data.images[x]);
      const imgForm = formData.append("images", this.state.data.images[x]);
      console.log("imgForm...= ", imgForm);
      //count++
    }
    console.warn(">> formData >> ", formData.getAll("images"));
    console.log(">> image state >> ", this.state.data);

    formData.append("name", this.state.data.name);
    formData.append("desc", this.state.data.desc);
    formData.append("price", this.state.data.price);
    formData.append("numberInStock", this.state.data.numberInStock);
    formData.append("category", this.state.data.categoryId);
    console.log("test....", formData.getAll("category"));

    for (var value of formData.values()) {
      console.warn(value);
    }

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    console.log("Config", config);
    // console.log('img in do submit', this.state.data.image)
    await saveProduct(this.state.data, formData, config);
    this.props.history.push("/products");
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-info">
          {this.props.match.path === "/new-product"
            ? "Add Products"
            : "Update Product"}
        </h2>
        <form
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
          className="col-md-6"
        >
          {this.renderInput("name", "Name")}
          {this.renderInput("desc", "Description")}
          {this.renderSelect(
            "categoryId",
            "Choose Categorie",
            this.state.category
          )}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("price", "Price", "number")}
          {this.renderImage("images", "Select Images", "file")}
          {this.props.match.path === "/edit-product/:id"
            ? this.renderButton("Update")
            : this.renderButton("Create")}
          <hr />
        </form>
      </div>
    );
  }
}

export default ProductForm;
