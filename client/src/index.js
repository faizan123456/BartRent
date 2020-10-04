import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { Helmet } from "react-helmet";
// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
import { store } from "./redux/store";
import "./index.css";
import App from "./components/App";
import Wizard from "./components/productWizard/wizard";
//import AdminApp from "./admin/components/adminApp";
// import reducers from "./reducers";
// , applyMiddleware(reduxThunk)
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Wizard /> */}
  </Provider>,

  document.querySelector("#root")
);

// ReactDOM.createPortal(
//   <AdminApp />,
//   document.querySelector("#admin")
// );
