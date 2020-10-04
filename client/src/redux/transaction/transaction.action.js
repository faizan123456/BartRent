import { FETCH_TRANSACTIONS } from "./transaction.types";
import http from "../../services/httpService";

export const fetchTransactions = () => async (dispatch) => {
  const response = await http.get("./api/transactions");
  dispatch({ type: FETCH_TRANSACTIONS, payload: response.data });
};
