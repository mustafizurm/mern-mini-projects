const User = require("../model/user.model")

// user
exports.userSignUp = async (req,res,next) => {
    const {name, email, password, gender, status, phone, address} = req.body;

    const existingUser = await User.findOne({email: email});

    const newUser = {
        name, email, password, gender, status, phone, address
    }

    if(existingUser){
        res.status(404).json({
            success: false,
            message: "User already register"
        })
    } else{

        const user = await new User(newUser);
        await user.save();

        res.status(200).json({
            success: true,
            message: "User register successfully",
            user
        })
    }
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
    // const { status, search } = req.query;

    // Create an empty filter object by default

    const status = req.query.status || ""
    const search = req.query.search || ""
    const gender = req.query.gender || ""
    // const page = Number(req.query.page) || 1;
    // const pageLimit = Number(req.query.limit) || 3;

    const limit = Number(req.query.limit) || "";
    const skip = Number(req.query.skip) || "";

    console.log("limit"+limit)
    console.log("skip"+skip);


    const filter = {};

    if(status){
        filter.status = status;
    } 
    if(search){
        filter.name = {$regex: search, $options: "i"}
    }
    if(gender && gender !== "all"){
        filter.gender = gender
    }

    console.log(filter)

    // if(status && status !== ""){
    //     filter.status = status;
    // }

    // if(search && search !== ""){
    //     filter.name = {$regex: search, $options: "i"}
    // }


    // Fetch users based on the filter
    try {
        const users = await User.find(filter).limit(limit).skip(skip)
        const totalUsers = await User.find(filter).countDocuments();
        // const users = await User.find(filter).skip((page * pageLimit) - pageLimit).limit(pageLimit)
        // const count = await User.find(filter).countDocuments();
        // const pageCount = Math.ceil(count / pageLimit);

        res.status(200).json({
            success: true,
            message: "All users",
            users,
            totalUsers,
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