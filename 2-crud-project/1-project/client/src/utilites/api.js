import commonApi from "./apiCall"
import { BASE_URL } from "./BaseUrl"

export const createProductApi = async () => {
   const response = commonApi("POST", `${BASE_URL}/product/create`, "")
   return response;
}

// export const usergetfunc = async(search,gender,status,sort,page)=>{
//     return await commonrequest("GET",`${BASE_URL}/user/details?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`,"");
// }

// export const getProductApi = async () => {
//     try {
//         const response = await commonApi("GET", `http://localhost:5000/api/v1/products`, "", null);
//         return response;  // Return the product data from the API
//     } catch (error) {
//         console.error("Failed to fetch product:", error);
//         throw error;  // Rethrow to handle further if needed
//     }
// }

// export const getProductApi = () => {

//        return commonApi("GET", `http://localhost:5000/api/v1/products`, "", null)
//          .then((data)=> {
//             console.log(data)
//             return data
//          })
//          .catch((data)=> {
//             return data
//          })
        
//           // Return the product data from the API
// }

// ${BASE_URL}/api/v1/products


export const getProductApi = () => {
   const fetch1 = commonApi("GET", "http://localhost:5000/api/v1/products", "", null)
   


//    console.log(response)
//    .then((data)=> {
//     console.log(data)
//    })
//    .catch((error)=> {
//     console.log(error)
//    })
}