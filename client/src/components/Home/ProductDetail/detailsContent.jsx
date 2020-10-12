import React, { Component } from "react";
import { connect } from "react-redux";
import { productListRequest } from "../../../redux/products/product.action";

class DetailsContent extends Component {
  state = {};
  // render
  componentDidMount() {
    this.props.productListRequest();
  }

  render() {
    const { match } = this.props;
    console.log("Product", this.props.product);
    return <div>DEtails product Id of the product{match.params.id}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let arr = Object.values(state.products);
  const { match } = ownProps;
  console.log(" map state to array", match.params.id, arr);
  const product = arr.find((item) => item._id == match.params.id);
  // console.log("Here is the product", product);
  return {
    product: product,
  };
};
export default connect(mapStateToProps, { productListRequest })(DetailsContent);
