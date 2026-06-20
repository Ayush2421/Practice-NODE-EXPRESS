const express = require("express");
const userRouter = require("./router/userRouter")
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json())
app.use(cookieParser())


app.use("/auth", userRouter.router1)




module.exports =  app;