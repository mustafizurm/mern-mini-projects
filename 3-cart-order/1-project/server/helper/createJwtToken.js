const jwt = require("jsonwebtoken");

const createToken = async (user) => {
    const token = jwt.sign({email: user.email}, process.env.SECURITY_KEY, {expiresIn: "1d"})

    return token
}

module.exports = createToken;