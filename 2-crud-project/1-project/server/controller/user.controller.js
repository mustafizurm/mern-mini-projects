const User = require("../model/user.model")

// user
exports.userSignUp = async (req,res,next) => {

}

exports.userLogin = async (req,res,next) => {

}

exports.userLogout = async (req,res,next) => {

}

exports.userUpdate = async (req,res,next) => {

}

exports.userPasswordUpdate = async (req,res,next) => {

}

exports.userForgetPassword = async (req,res,next) => {

}

exports.resetPassword = async (req,res,next) => {

}

// admin
exports.getAllUsers = async (req, res, next) => {
    const { status, search } = req.query;

    // Create an empty filter object by default
    const filter = {};

    if(status){
        filter.status = status;
    }

    if(search){
        filter.name = {$regex: search}
    }

    console.log(filter)

    // Fetch users based on the filter
    try {
        const users = await User.find(filter);

        res.status(200).json({
            success: true,
            message: "All users",
            users,
        });
    } catch (error) {
        // Handle any errors that might occur during database query
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};


exports.getSingleUser = async (req,res,next) => {

}

exports.deleteSingleUser = async (req,res,next) => {

}