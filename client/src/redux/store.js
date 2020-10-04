import { createStore, applyMiddleware, compose } from "redux";

import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-redux";

const middleware = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default { store };
