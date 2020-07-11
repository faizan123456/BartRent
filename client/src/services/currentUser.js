import axios from "axios";
const apiEndpoint = apiUrl + "/users/current";

export function getCurrent(token) {
  axios.get(apiEndpoint, {
    headers: {
      Authorization: "Token " + token //the token is a variable which holds the token
    }
  });
}
