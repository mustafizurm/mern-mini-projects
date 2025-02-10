const User = require("../model/user.model")
const Response = require("../helper/response");
const createToken = require("../helper/createJwtToken");

exports.userRegister = async (req,res,next) => {
    const {name, email, password} = req.body;
    const newUser = {
        name, email, password
    }
    const existingUser = await User.findOne({email: email});
    if(existingUser){        
        Response(404, false, "Already User register", null, res)
        
    } else{
        const user = await User.create(newUser)
        await user.save()
        Response(202, true, "User register successfully", user, res)
    }


}

exports.userLogin = async (req,res,next) => {
    const {email, password} = req.body;

    const existingUser = await User.findOne({email:email});

    if(!existingUser){
        Response(404, false, "You are not register, plz register", null, res)
    } else{
        const newPassword = existingUser.password;

        if(password !== newPassword){
            Response(404, false, "Password is wrong", null, res)

        } else{
           const token = await createToken(existingUser)
           const options = {
            expires: new Date(Date.now() + "4" * 24 *  60*60*1000 ),
            httpOnly: true,
        }
    
        res.status(200).cookie('token', token, options).json({
            success: true,
            message: "User login successfully",
            user: existingUser, 
            token: token 
        });
        }
    }
    
}


exports.userLogout = async (req,res,next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logout Successfully"
    });
}

exports.userProfile = async (req,res,next) => {
    console.log(req.user)
    res.json({message: "profile"})
}