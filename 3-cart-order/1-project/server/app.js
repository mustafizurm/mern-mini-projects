const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");

app.use(cookie_parser())
app.use(express.json())

// custom file require
const userRoute = require("./routes/user.route")

// user route 
app.use("/api", userRoute)

// 

module.exports = app;