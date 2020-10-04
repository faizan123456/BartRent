import _ from "lodash";

import { FETCH_CATEGORIES } from "./categories.types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log("REDUCER of  FETCH_CATEGORIES  ");
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};

// export default TransactionReducer;
