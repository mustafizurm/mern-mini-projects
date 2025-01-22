// built in file require
const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");
app.use(express.json());
app.use(cookie_parser())


// custom file require
const asyncErrorHandler = require("./midelware/AsyncErrorHandler")
const userRoute = require("./routes/User.Route")

// user Route
app.use("/api/v1", userRoute)


// AsyncError Handler
app.use(asyncErrorHandler)


module.exports = app;