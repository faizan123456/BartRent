import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import productListReducer from "./products/product.reducer";
import TransactionReducer from "./transaction/transactions.reducer";
import SwapTypesReducer from "./swapTypes/swapTypes.reducer";
import ProductCategories from "./categories/categories.reducer";

// import cartReducer from "./cart/cart.reducer";
// import directoryReducer from "./directory/directory.reducer";
// import shopReducer from "./shop/shop.reducer";

// const persistConig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"]
// };

import { reducer as reducerForm } from "redux-form";
const rootReducer = combineReducers({
  user: userReducer,
  form: reducerForm,
  products: productListReducer,
  transaction: TransactionReducer,
  swapType: SwapTypesReducer,
  categories: ProductCategories,
});

export default rootReducer;
// export default persistReducer(persistConig, rootReducer);
