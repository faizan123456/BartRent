import { FETCH_CATEGORIES } from "./categories.types";
import http from "../../services/httpService";

//services , state =>changing of state
export const fetchCategories = () => async (dispatch) => {
  const response = await http.get("./api/categories");
  console.log("action of swapTypes", response);
  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};
