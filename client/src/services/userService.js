import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/users";

export async function register(user) {
  // console.log("I am Registered method ", user, apiEndpoint);
  console.log("user of register method", user);
  const result = await http.post(apiEndpoint, {
    user: {
      email: user.email,
      password: user.password,
      cPassword: user.cpassword,
      firstName: user.firstname,
      lastName: user.lastname,
      countryId: user.countryId,
      stateId: user.stateId,
      cityId: user.cityId,
      DOB: user.Dob,
      genderId: user.genderId,
      phone: user.phone,
      zip: user.zip,
      address: user.address,
    },
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

export function getGenders() {
  return http.get(apiUrl + "/genders/");
}
