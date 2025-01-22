const asyncErrorHandler = async (req,res,next) =>{
    res.status(404).json({
        success: false,
        message: "Route Not Found, Its bad request"
    })
}

module.exports = asyncErrorHandler;