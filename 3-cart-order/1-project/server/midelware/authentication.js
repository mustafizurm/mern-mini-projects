const User = require("../model/user.model")
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    // const token = req.cookies.token;

    // if (!token) {
    //     return res.status(401).json({ message: "It's a private route, please log in." });
    // }

    // try {

    //     const decode = jwt.verify(token, process.env.SECURITY_KEY)

    //     const user = await User.findOne({email: decode.email});
        
    //     req.user = user

    //   next();
        
    // } catch (error) {
    //     res.json({error})
    // }

    const token = req.cookies.token;

    if(!token){
        res.status(404).json({
            success: false,
            message: "Private route, plz login"
        })
    } else{

        const decode = jwt.verify(token,process.env.SECURITY_KEY);
        const user = await User.findOne({email: decode.email});

        req.user = user

        next()
    }

}

module.exports = auth;