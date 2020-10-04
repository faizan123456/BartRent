import _ from "lodash";
import { FETCH_SWAPTYPES } from "./swapTypes.types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SWAPTYPES:
      console.log("REDUCER of  FETCH_SWAPTYPES ");
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};

// export default TransactionReducer;
