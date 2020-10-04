import _ from "lodash";

import { FETCH_TRANSACTIONS } from "./transaction.types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    // case FETCH_SWAPTYPES:
    //   return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};

// export default TransactionReducer;
