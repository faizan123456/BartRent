import http from "./httpService";
import { apiUrl } from "../config.json";

export const apiEndPoint = apiUrl + "/products";

function productUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getProducts() {
  return http.get(apiEndPoint);
}

export function getProduct(productId) {
  const res = http.get(productUrl(productId));
  console.log(res);
  return res;
}

export async function saveProduct(product, formData, config) {
  console.log("Save Method...= ", product, formData, config);
  delete product.images;
  console.log("pro... ", product);

  if (product._id) {
    const body = { ...product };
    console.log("save method", body);
    delete body._id;
    //const res = http.put(productUrl(product._id), body);
    console.log("formdata mera wala.... meherbani he theek se chalna", product);
    var files = formData.getAll("images");
    console.log("formdataaaaa.... ", files[0].name);
    if (!files[0].name) {
      formData.delete("images");
      console.log("formmmmm... ", formData.getAll("images"));
    }
    console.log("formdataaaaa.... ", files[0].name);
    const res = http.patch(productUrl(product._id), formData, config);
    console.log("save product", res);
    return res;
  }
  for (var value of formData.values()) {
    console.warn(value);
  }
  console.log("apiEndPoint- >", apiEndPoint, "fd->>>>>", formData);
  const res = await http.post(apiEndPoint, formData, config);
  console.log("res...= ", res);
  return res;
}

export function deleteProduct(productId) {
  http.delete(productUrl(productId));
}
