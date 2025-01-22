const app = require("./app");
const dotEnv = require("dotenv");
dotEnv.config({path: "./config/env"})

const connectDatabase = require("./config/DatabaseConnect");

// PORT
const PORT = process.env.PORT || 3000;

// database Connect
connectDatabase();

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
})