
// const response = async (statusCode, success, message, user, res) => {
    
//     res.status(statusCode).json({
//         success: success,
//         message: message,
//         user: user ? user : null,
//     });

// };

// const loginResponse = (statusCode, success, message, user, token, res) => {
       
//     res.status(statusCode).cookie("web-token",token).json({
//         success: success,
//         message: message,
//         user: user ? user : null,
//         token: token ? token : null
//     }); 
// }

// module.exports = {response, loginResponse};

exports = response = async (statusCode, success, message, data, res) => {

    res.status(statusCode).json({
        success: success,
        message: message,
        user: data || null, 
    });
};


module.exports = response;
