import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/products";

function productUrl(id) {
    return `${apiEndPoint}/${id}`;
}

// var getProd={};
// export function setProduct(product) {
//     getProd = product;
// }

// export  function getProduct1() {
//     console.log(getProd)
//     return getProd;
// }


export function getProducts() {
    return http.get(apiEndPoint);
}

export function getProduct(productId){
  const res = http.get(productUrl(productId));
   console.log(res);
   return res;
}

export function saveProduct(product){
    if(product._id){
        const body = { ...product };
        
        console.log('save method',body)
        delete body._id;
       const res = http.put(productUrl(product._id), body);
        console.log('save product', res);
        return res;
    }       
    return http.post(apiEndPoint, {
        product: {
          name: product.name,
          desc: product.desc,
          price: product.price,
          numberInStock: product.numberInStock,
          category: product.categoryId
        }
});

}

export function deleteProduct(productId) {
    http.delete(productUrl(productId));
}