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
          categoryId: "",
          numberInStock: "",
          price: ""
        },
        category: [],
        errors: {},
      };

    schema = {
        _id: Joi.string(),
        name: Joi.string().required().label("Name"),
        categoryId: Joi.string().required().label("Category"),
       // image: Joi.string().label("Image"),
        price: Joi.number().required().min(1).label("Price"),
        desc: Joi.string().required().label("Description"),
        numberInStock: Joi.number().required().min(0).max(100)
        .label("Number in Stock"),        
    };

    async populateCategory() {
        const { data: category } = await getCategories();
        this.setState({ category });
    }
    
    async populateProduct() {
      try {
        const productId = this.props.match.params.id;
        if(productId === "new") return;

        const { data: product } = await getProduct(productId);
        console.log("Pro...", product.category);
        
        console.log("Cat", this.mapToViewModel(product));
        this.setState({ data: this.mapToViewModel(product)  });        
      }
      catch(ex) {
          if(ex.response && ex.response.status === 404 )
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
        categoryId: product.category._id,        
        numberInStock: product.numberInStock
      };
    }


    doSubmit = async () => {
      console.log("submit....")
      console.log("dataaaa....", this.state.data);
     await saveProduct(this.state.data);      
     this.props.history.push("/products");     
    };

    render() {
      return (
        <div className="container">
          <h2 className="text-info">{(this.props.match.path) === '/new-product' ? "Add Products" : "Update Product" }</h2> 
          <form onSubmit={this.handleSubmit} className="col-md-6">
            {this.renderInput("name", "Name")}
            {this.renderInput("desc", "Description")}            
            {this.renderSelect("categoryId", "Categorie", this.state.category)}
            {this.renderInput("numberInStock", "Number In Stock", "number")}
            {this.renderInput("price", "Price", "number")}
           {(this.props.match.path) === '/edit-product/:id' ? this.renderButton('Update') : this.renderButton("Create") } 
            <hr />
          </form>
        </div>
      );
    }
}

export default ProductForm;