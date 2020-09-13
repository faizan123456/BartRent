import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/users";

export async function register(user) {
  // console.log("I am Registered method ", user, apiEndpoint);
  console.log("user of register method", user.countryId);
  const result = await http.post(apiEndpoint, {
    user: {
      email: user.username,
      password: user.password,
      name: user.name,
      countryId: user.countryId,
      stateId: user.stateId,
      cityId: user.cityId
    }
  });
  console.log("registred post req", result);
  return result;
}

export function getCountries() {
  return http.get(apiUrl + "/loc");
}

export function getStates(cId) {
  console.log(cId);
  const res = http.get(apiUrl + "/loc/states/" + cId);
  console.log(res);
  return res;
}

export function getCities(sId) {
  return http.get(apiUrl + "/loc/cities/" + sId);
}
