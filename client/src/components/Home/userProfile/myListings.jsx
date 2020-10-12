import React, { Component } from "react";
import { connect } from "react-redux";
import { productListRequest } from "../../../redux/products/product.action";

// import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import BasicTable from "./usertable";

class MyListings extends Component {
  state = {};

  componentDidMount() {
    this.props.productListRequest();
  }
  render() {
    console.log("rendeer", this.props.currentUserProductsList);
    const { currentUserProductsList } = this.props;
    return <BasicTable />;
    // null;
    // BasicTable();
  }
}
const mapStateTopProps = (state) => {
  //   CurrentUser: state.currentUser;
  const currentUserId =
    state.user && state.user.currentUser && state.user.currentUser.Id;
  const productsList = Object.values(state.products);
  console.log("CurrentUser With ProductList", currentUserId, productsList);
  console.log("Length", productsList.length);

  for (let i = 0; i < productsList.length; i++) {
    var arr = [];
    let SelectedProduct = productsList.filter(
      (item) => item.productOwner === currentUserId
    );

    console.log(" for for for for for for for for ");
    arr.push(SelectedProduct);
    console.log("current User Products", arr);
  }
  return {
    currentUserProductsList: arr,
  };

  //   console.log("Current User IIIDDD", currentUserId);
  //   console.log("Current User IIIDDD", productsList);
};
export default connect(mapStateTopProps, { productListRequest })(MyListings);

// import React, { Component } from "react";
// import { imageUrl } from "../config.json";
// import { Link, Route } from "react-router-dom";
// import { deleteProduct, getProducts } from "../services/productService";
// import {} from "";

// class Products extends Component {
//   state = {
//     products: [],
//     category: [],
//     transactionTypes: [],
//     swapTypes: [],
//     selectedProduct: null,
//   };

//   //  Spinner() {
//   //   <React.Fragment>
//   //    <div class="spinner-grow text-info"></div>`
//   //   </React.Fragment>
//   //  }

//   async componentDidMount() {
//     const { data: products } = await getProducts();
//     this.setState({ products });
//   }

//   handleDelete = async (product) => {
//     const originalProducts = this.state.products;
//     const products = originalProducts.filter((m) => m._id !== product._id);
//     this.setState({ products });
//     try {
//       await deleteProduct(product._id);
//     } catch (ex) {
//       if (ex.response && ex.response.status === 404) console.log("x");
//       //toast.error("This product has already been deleted.");
//       this.setState({ products: originalProducts });
//     }
//   };

//   render() {
//     const { products } = this.state;

//     return (
//       <div className="container-fluid">
//         <h4 className="text-primary">Welcome to Product List Component!</h4>
//         <h2>All Products</h2>

//         <Link to={"/new-product"} className="btn btn-primary">
//           Add Products
//         </Link>
//         <br />
//         <br />
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Number In Stock</th>
//               <th>Category</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products &&
//               products.map((product) => (
//                 <tr key={product._id}>
//                   <td>
//                     <Link to={`/product/${product._id}`}>{product.name}</Link>
//                   </td>
//                   <td>
//                     <img
//                       src={`${imageUrl}/${product.images[0].filename}`}
//                       style={{ width: "100px", height: "100px" }}
//                     />
//                   </td>
//                   <td>{product.desc}</td>
//                   <td>{product.price}</td>
//                   <td>{product.numberInStock}</td>
//                   <td>{product.category.name}</td>
//                   <td>
//                     {/* <div onClick={() =>this.handleUpdate(product) } className="badge badge-warning" style={{ cursor: "pointer" }}>update</div> &nbsp; */}
//                     {/*<Link to={`${this.props.match.path}/${product._id}`} >
//                             <div className="badge badge-warning text-white" onClick={() => this.handleUpdate(product)} style={{ cursor: "pointer" }}>update</div>
//                           </Link> &nbsp; */}
//                     <Link
//                       to={`/edit-product/${product._id}`}
//                       className="badge badge-primary text-white"
//                     >
//                       update
//                     </Link>{" "}
//                     &nbsp;
//                     <div
//                       onClick={() => this.handleDelete(product)}
//                       className="badge badge-danger"
//                       style={{ cursor: "pointer" }}
//                     >
//                       delete
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         {/* <Route
//                        exact path={`${this.props.match.url}/:id`}
//                        component={productDetail}
//                       /> */}
//       </div>
//     );
//   }
// }

// export default Products;

////data table
// const columns = [
//     { field: "transaction", headerName: "Transaction Type", width: 160 },
//     { field: "name", headerName: "Name", width: 130 },
//     { field: "category", headerName: "Category", width: 160 },
//     { field: "city", headerName: "City", width: 160 },
//     { field: "postalCode", headerName: "Postal Code", width: 160 },
//     { field: "price", headerName: "Estimate price", width: 160 },
//     //   {
//     //     field: "age",
//     //     headerName: "Age",
//     //     type: "number",
//     //     width: 90,
//     //   },
//     //   {
//     //     field: "fullName",
//     //     headerName: "Full name",
//     //     description: "This column has a value getter and is not sortable.",
//     //     sortable: false,
//     //     width: 160,
//     //     valueGetter: (params) =>
//     //       `${params.getValue("firstName") || ""} ${
//     //         params.getValue("lastName") || ""
//     //       }`,
//     //   },
//   ];

//   const rows = [
//     { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//     { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//     { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//     { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//     { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//     { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//     { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//     { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//     { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   ];

//   export function DataTable() {
//     return (
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//       </div>
//     );
//   }
