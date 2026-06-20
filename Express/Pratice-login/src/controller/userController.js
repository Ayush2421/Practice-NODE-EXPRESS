const userModel = require("../model/userModel")
const jwt = require("jsonwebtoken");

async function userPostMethod(req, res) {
    const { email, userName, password } = req.body;

    const userDataCreate = await userModel.create({
        email, userName, password
        }
    )

    const generateToken = await jwt.sign({
        id: userDataCreate._id
    }, process.env.JWT_TOKEN)

    await res.cookie("mama", generateToken);

    res.status(201).json({
        message: "received success",

    })
}

async function userGetMethod(req, res){
    const newData= userModel.find();

    res.status(200).json({
        message: "Fetch Success!!!",
        token: req.cookies.mama
    })
}


module.exports = { userPostMethod, userGetMethod}