const express = require("express");
const { userRegister, userLogin, updateProfile, getAllusers, getSingleuser, deleteUser } = require("../controller/User.controller");
const Router = express.Router();

// user
Router.post("/user/register", userRegister)
Router.post("/user/login", userLogin)
Router.put("/user/profile/update", updateProfile)


// admin
// get all users
Router.get("/admin/allUsers", getAllusers)

// get single user
Router.get("/admin/SingUser/:id", getSingleuser)

// user delete
Router.delete("/admin/user/remove/:id", deleteUser)

module.exports = Router;