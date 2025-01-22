const express = require("express");
const { getAllUsers, userSignUp, userLogin, userLogout } = require("../controller/user.controller");
const Router = express.Router();


// user
Router.post("/user/signup", userSignUp)
Router.post("/user/login", userLogin)
Router.post("/user/logout", userLogout)

// admin
Router.get('/admin/all_users', getAllUsers)

module.exports = Router;