import React, { Component } from "react";
import { imageUrl } from '../config.json';
import { Link, Route } from 'react-router-dom'
import { deleteProduct, getProducts} from "../services/productService";

class Products extends Component {
    state = {
        products: [],
        category: [],
        selectedProduct: null   
    }

  //  Spinner() {
  //   <React.Fragment>
  //    <div class="spinner-grow text-info"></div>`
  //   </React.Fragment>     
  //  }

    async componentDidMount() {   
         
        const { data: products } = await getProducts();
        this.setState({ products });
     }
     
      handleDelete = async (product) => {
        const originalProducts = this.state.products;
        const products = originalProducts.filter((m) => m._id !== product._id);
        this.setState({ products });    
        try {
          await deleteProduct(product._id);
        } catch (ex) {
          if (ex.response && ex.response.status === 404) console.log("x");
          //toast.error("This product has already been deleted.");    
          this.setState({ products: originalProducts });
        }
      };


      render() {
        
        const { products } = this.state;
        
        return (
            <div className="container-fluid">
                <h4 className="text-primary">Welcome to Product List Component!</h4>
                <h2>All Products</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Number In Stock</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                   {products &&
                    products.map((product) => (
                        <tr key={product._id}>
                          <td><Link to={`/product/${product._id}`}>{product.name}</Link></td>
                          <td><img src={`${imageUrl}/${product.images[0].filename}`} style={{ "width": "100px", "height": "100px" }} /></td>
                          <td>{product.desc}</td>
                          <td>{product.price}</td>
                          <td>{product.numberInStock}</td>
                          <td>{product.category.name}</td>
                          <td>
                          {/* <div onClick={() =>this.handleUpdate(product) } className="badge badge-warning" style={{ cursor: "pointer" }}>update</div> &nbsp; */}
                          
                          {/*<Link to={`${this.props.match.path}/${product._id}`} >
                            <div className="badge badge-warning text-white" onClick={() => this.handleUpdate(product)} style={{ cursor: "pointer" }}>update</div>
                          </Link> &nbsp; */}
                          <Link to={`/edit-product/${product._id}`} className="badge badge-primary text-white">update</Link> &nbsp;
                          <div onClick={() => this.handleDelete(product)} className="badge badge-danger" style={{ cursor: "pointer" }}>delete</div>
                          </td>                                                    
                        </tr>
                    ))}
                    
                        
                    
                    </tbody>
                </table>
                      {/* <Route
                       exact path={`${this.props.match.url}/:id`}
                       component={productDetail}
                      /> */}
               </div>

        )
    }

}

export default Products;