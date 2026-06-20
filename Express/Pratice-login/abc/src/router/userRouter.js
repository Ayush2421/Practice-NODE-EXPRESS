const express = require("express");
const userController = require("../controller/userController")



const router1 =  express.Router();

router1.post("/login", userController.postUserInfo);
router1.get("/test", userController.getUserInfo)

module.exports = {router1};