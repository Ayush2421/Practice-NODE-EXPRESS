const  jwt = require("jsonwebtoken");

const loginModel = require("../model/loginModel")

const postUserInfo = async(req, res)=>{
    const { userName,email, password} = req.body;
       const user = await loginModel.create({
       userName,email, password
       })

       const genToken = await jwt.sign({
            id: user._id
       },process.env.JWT_TOKEN)

       res.cookie("mama", genToken);

       res.status(201).json({
        message: "Send Success...",
        user
       })

}

const getUserInfo = async(req, res) => {
    const newData = await loginModel.find();
    console.log( "Ayush____________"+ newData)
    res.status(200).json({
        message: "Fetched SuccessFull",
        mamaToken: req.cookies
    })
}

module.exports = {postUserInfo, getUserInfo}