import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/users";

export async function register(user) {
  // console.log("I am Registered method ", user, apiEndpoint);
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

export function getStates() {
  return http.get(apiUrl + "/loc/states");
}

export function getCities() {
  return http.get(apiUrl + "/loc/cities");
}
