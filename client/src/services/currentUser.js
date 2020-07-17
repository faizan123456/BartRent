import http from "../services/httpService";
import auth from "../services/authService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/api/current_user";

export async function getCurrent() {
  const res = await http.get("http://localhost:3000/api/current_user");
  console.log("res", res);
  // const token = res.data.token;
  const token = res.headers["x-auth-token"];
  console.log("this one", token);
  auth.loginWithJwt(token);
}

export default {
  getCurrent
};
