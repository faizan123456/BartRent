import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
// import cartReducer from "./cart/cart.reducer";
// import directoryReducer from "./directory/directory.reducer";
// import shopReducer from "./shop/shop.reducer";

// const persistConig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"]
// };

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
// export default persistReducer(persistConig, rootReducer);
