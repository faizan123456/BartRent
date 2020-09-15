import React, {Component} from "react";
import { imageUrl } from '../config.json';
import { getProduct } from '../services/productService';

class productDetail extends Component {
    state = {
        product: {},   
        category:''     
    }
    
    populateProduct = async(id) => { 
        const {data: product} = await getProduct(id);
        this.setState({ product , category: product.category.name});         
    }
      
    async componentDidMount(){
        const {id:productId} = await this.props.match.params;
        await this.populateProduct(productId);
    }

    render() {

        //console.log(this.state.category)

         const { product, category } = this.state;
         if(product.images) {
            console.log('prod images... ', product.images[0].filename);
         }    
        
        return (
            <div className="container">
                <div className="card pull-center" style={{width: "600px"}}>
                    <div className="card-header bg-primary text-center text-white h3">Product Detail</div>
                    <div className="card-body">
                        <b>Product Name:</b> {product.name}<br />
                        <b>Product Description:</b> {product.desc}<br />
                        <b>Product Price:</b> {product.price}<br />
                        <b>Number In Stock:</b> {product.numberInStock}<br />
                        <b>Image:</b> {product.images && <img src={`${imageUrl}/${product.images[0].filename}`} style={{ "width": "100px", "height": "100px" }} /> }<br />
                        <b>Product Category:</b> {category}
                    </div>
                </div>
            </div>
        )
    }
           
}

export default productDetail;