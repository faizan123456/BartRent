import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export async function register(user) {
  // console.log("I am Registered method ", user, apiEndpoint);
  const result = await http.post(apiEndpoint, {
    user: {
      email: user.username,
      password: user.password,
      name: user.name
    }
  });
  console.log("registred post req", result);
  return result;
}
