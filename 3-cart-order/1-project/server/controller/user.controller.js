const User = require("../model/user.model")

exports.userRegister = async (req,res,next) => {

    const {name, email, password} = req.body;

    const newUser = {
        name, email, password
    }

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        
        res.json({
            success: false,
            message: "Already User register"
        })
    } else{
        const user = await User.create(newUser)
        await user.save()
     
         res.json({
             success: true,
             message: "User register successfully",
             user
             })
    }


}

exports.userLogin = async (req,res,next) => {
    
}