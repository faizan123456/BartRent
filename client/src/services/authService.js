import axios from "axios";
import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/users/login";

http.setJwt(getJwt());

export async function getCurrent() {
  const res = await http.get("http://localhost:3000/api/current_user");
  console.log("res", res);
  // const token = res.data.token;
  const token = res.headers["x-auth-token"];
  console.log("this one", token);

  loginWithJwt(token);
}

// export async function getCurrent(email, password) {
//   // console.log("I am Login method ", email, password, apiEndpoint);
//   const { data: jwt } = await http.get(
//     "http://localhost:3000/api/current_user"
//   );
//   localStorage.setItem("token", jwt.user.token);
//   console.log("get GGGGGGG", jwt.user.token);
// }
export async function login(email, password) {
  // console.log("I am Login method ", email, password, apiEndpoint);
  const { data: jwt } = await http.post(
    apiEndpoint,
    // { email, password }
    {
      user: {
        email: email,
        password: password
        // name:user.name
      }
    }
  );
  localStorage.setItem("token", jwt.user.token);
  console.log("LLoogin", jwt.user.token);
}
//  export function gtoken()
export function loginWithJwt(jwt) {
  console.log("come into the login method of jwt ", jwt);
  localStorage.setItem("token", jwt);
}

export function logout() {
  console.log(" I am logout ");
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  console.log("get current user g.........");
  try {
    const jwt = localStorage.getItem("token");
    console.log("is token here........", jwt);

    // axios.get("http://localhost:5000/api/users/current", {
    //   headers: {
    //     Authorization: "Token " + jwt //the token is a variable which holds the token
    //   }
    // });
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

// export function setJwt() {
//   return localStorage.setItem("token", jwt.user.token);
// }

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  getCurrent
};
