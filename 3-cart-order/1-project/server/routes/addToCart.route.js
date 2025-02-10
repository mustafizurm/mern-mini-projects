const express = require("express");
const { createAddToCart, increment, decrement } = require("../controller/addToCart.controller");
const auth = require("../midelware/authentication");
const Router = express.Router();


Router.post("/user/addToCart", auth, createAddToCart)
Router.put("/user/addToCart/increment", auth, increment)
Router.put("/user/addToCart/decrement", auth, decrement)

module.exports = Router;