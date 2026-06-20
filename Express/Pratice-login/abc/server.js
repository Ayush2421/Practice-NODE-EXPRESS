require("dotenv").config()
const app = require("./src/app");
const ConnectDB = require("./src/database/db")

ConnectDB();
const PORT = 1001;

app.listen(PORT, ()=>{
    console.log(`Started on http://localhost:${PORT}`)
})