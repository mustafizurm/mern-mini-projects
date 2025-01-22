const { query } = require("express");
const User = require("../model/User.model")

exports.userRegister =  async (req,res,next)=> {
    const {firstName, lastName, email, password, status, gender} = req.body;

    const existingUser = await User.findOne({email: email});


    if(existingUser){
        res.status(404).json({
            success: false,
            message: "User Already Created"
        })
    } else{
        const newUser = {
            firstName, lastName, email, password, status, gender,
            profile: {
                public_url: "this is sample public url",
                url: "this is sample url"
            },
        }

        const user = await User.create(newUser);
        await user.save();

        res.status(200).json({
            success: true,
            message: "User Created Successfully",
            user
        })
    }
}

exports.userLogin = async (req,res,next)=> {

}

exports.updateProfile = async (req,res,next)=> {}


// admin
exports.getAllusers = async (req,res,next)=> {

    // const name = req.query.name || null;
    // const gender = req.query.gender || null;
    // const status = req.query.status || null;
    
    // // Dynamically build the query object based on provided parameters
    // const query = {};
    // if (name) query.firstName = name;
    // if (gender) query.gender = gender;
    // if (status) query.status = status;

    // try {
    //     const userData = await User.find(query);
    //     console.log(userData)
    //     res.status(200).json({
    //         success: true,
    //         message: "all data here",
    //         userData
    //     })
    // } catch (error) {
    //     res.status(404).json({
    //         success: false,
    //         message: "error",
    //         error
    //     })
    // }

//    first
    const gender = req.query.gender || "";

    // second
    const status = req.query.status || "";

    // third
    const name = req.query.name || "";

    // fourth
    const minNum = req.query.minNum || "";
    const maxNum = req.query.maxNum || "";

    // fifth
    const rating = req.query.rating || "";
    const price = req.query.price || "";
    const location = req.query.location || "";

    // six
    const search = req.query.search;

    let query = {};

    if(gender){
        query.gender = gender;
    }
    if(status){
        query.status = status;
    } 
    if(name){
        query.name = name
    }
    if(search){
        query ={
            ...query,
            $or: [
                {firstName: search},
                {gender: search}
            ]
        }
    }

    const findUser = await User.find(query)

        res.status(200).json({
            success: true,
            message: "all data here",
            findUser
        })

}
exports.getSingleuser = async (req,res,next)=> {}
exports.deleteUser = async (req,res,next)=> {}