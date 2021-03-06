import _ from "lodash";
import { CREACT_PRODUCT, PRODUCT_LIST_REQUEST } from "./product.types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREACT_PRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    case PRODUCT_LIST_REQUEST:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};

// import {
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_LIST_FAIL,
//   } from "./product.types";
//   const initialState = {
//     products: [],
//     error: "",
//     loading: false,
//   };

//   const productListReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case PRODUCT_LIST_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case PRODUCT_LIST_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           products: action.payload,
//         };
//       case PRODUCT_LIST_FAIL:
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };

//   export default productListReducer;
