const mongoose = require("mongoose")

async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db")
    }catch(err){
        console.log("not connect to db:" + err)

    }
}

module.exports = ConnectDB;