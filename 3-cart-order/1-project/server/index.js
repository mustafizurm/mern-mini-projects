const app = require("./app");
const dotEnv = require("dotenv");
dotEnv.config({path: "./config/env"})
const connectDataBase = require("./config/connectDatabase");
const PORT = process.env.PORT;

// database connection
connectDataBase()

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
})