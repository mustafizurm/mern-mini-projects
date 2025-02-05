
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

exports = response = async (statusCode, success, message, data, token, res) => {

    const options = {
        expires: new Date(Date.now() + "4" * 24 *  60*60*1000 ),
        httpOnly: true,
    }

    res.status(statusCode).cookie('token', token || '', options).json({
        success: success,
        message: message,
        user: data || null, 
        token: token || null
    });
};


module.exports = response;
