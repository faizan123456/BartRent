import { FETCH_SWAPTYPES } from "./swapTypes.types";
import http from "../../services/httpService";

export const fetchSwapTypes = () => async (dispatch) => {
  const response = await http.get("./api/swapTypes");
  console.log("action of swapTypes", response);
  dispatch({ type: FETCH_SWAPTYPES, payload: response.data });
};
