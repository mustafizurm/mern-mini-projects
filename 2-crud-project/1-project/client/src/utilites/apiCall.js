// const commonApi = async (methods,url,header,data) => {
//    await fetch(url, {
//         method:methods,
//         headers:header ? 
//         header:{
//             "Content-Type":"application/json"
//         },
//         body: data
//     })
//     .then((data)=> {
//         return data
//     })
//     .catch((error)=>{
//         return error;
//     })
// }

import { useState } from "react"


// export default commonApi;

// const commonApi = async (method, url, header, data) => {
//     try {
//         const response = await fetch(url, {
//             method: method,
//             headers: header ? header : { "Content-Type": "application/json" },
//             // mode: 'no-cors',
//             body: method !== 'GET' ? JSON.stringify(data) : undefined  // Ensure body is not sent for GET requests
//         });

//         // Check if the response is OK (status code 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         // Parse the JSON response
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;  // Rethrow the error to be handled by the caller
//     }
// }

// export default commonApi



// const commonApi =  (method, url, header, data) => {
//         return fetch(url, {
//             method: method,
//             headers: header ? header : { "Content-Type": "application/json" },
//             // mode: 'no-cors',
//             body: method !== 'GET' ? JSON.stringify(data) : undefined  // Ensure body is not sent for GET requests
//         })
//         .then((data) => data.json())
//         .then((data)=> {
//             return data
//         })
//         .catch((error)=> {
//            return error
//         })

// }

// export default commonApi




const commonApi =  (method, url, header, dat) => {
     return fetch(url, {
        method: method,
        headers: header ? header : { "Content-Type": "application/json" },
        // mode: 'no-cors',
        body: method !== 'GET' ? JSON.stringify(dat) : undefined , // Ensure body is not sent for GET requests
    })
    .then((d) => d.json())
    .then((d)=> {
       return d
    })
    .catch((er)=> {
       return er
    })
  
}

export default commonApi


