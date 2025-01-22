
const app = require("./app");
const dotEnv = require("dotenv");
dotEnv.config({path: "./config/env"})
const PORT = process.env.PORT || 3000
const connectDatabase = require("./config/Database");

// connect Database
connectDatabase()

// 

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})