const express = require("express")
const userController =  require("../controller/userController")

const router1 =  express.Router();

router1.post("/user", userController.userPostMethod);
router1.get("/user", userController.userGetMethod)


module.exports = {router1}