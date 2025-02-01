const express = require("express");
const { userRegister, userLogin } = require("../controller/user.controller");
const Router = express.Router();

// user
Router.post("/user/register", userRegister)
Router.post("/user/login", userLogin)
Router.put("/user/profile/update/:id")
Router.put("/user/password/update/:id")
Router.put("/user/password/forgat/:id")
Router.put("/user/password/reset/:id")

// admin
Router.get("/admin/get_allUsers")
Router.get("/admin/get_singUser")
Router.delete("/admin/delete_user")


module.exports = Router;