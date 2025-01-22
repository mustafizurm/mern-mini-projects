// const commonRequest = async (methods, url, data, header) => {
//     await fetch(url, {
//         method: methods,
//         headers: header ?
//         header: {
//             "Content-Type": "application/json"
//         },
//         body: data
//     })
//     .then((data)=> {
//         return data;
//     })
//     .catch((error)=> {
//         return error
//     })
// }
// export default commonRequest;

const commonRequest = async (methods,url,header) => {
    await fetch(url, {
        method: methods,
        headers: header ? 
        header: {
            "Content-Type": "application/json"
        }
    })
    .then((data)=> {
        return data;
    })
    .catch((error)=>{
        return error;
    })
}

export default commonRequest;