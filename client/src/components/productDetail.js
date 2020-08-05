import React, {Component} from "react";
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
         //console.log('prod detail', product.category);
        
        return (
            <div className="container">
                <div className="card pull-center" style={{width: "600px"}}>
                    <div className="card-header bg-primary text-center text-white h3">Product Detail</div>
                    <div className="card-body">
                        Product Name: {product.name}<br />
                        Product Description: {product.desc}<br />
                        Product Price: {product.price}<br />
                        Number In Stock: {product.numberInStock}<br />
                        Product Category: {category}
                    </div>
                </div>
            </div>
        )
    }
           
}

export default productDetail;