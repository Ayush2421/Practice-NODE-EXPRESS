const mongoose =require("mongoose");


async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("Connected to DB")
    }
    catch(err){
        console.log("not connected to db")
    }
}

module.exports = ConnectDB;