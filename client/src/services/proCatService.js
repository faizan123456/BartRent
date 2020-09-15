import http from "./httpService";
import { apiUrl } from "../config.json";

export async function getCategories(){
     const res = await http.get(apiUrl + "/categories");
     console.log(res);
     return res;
}

// export async function getCategory(id){
//      const res = await http.get(apiUrl + "/categories/id");
//      console.log(res);
//      return res;
// }



