const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config.js");

const database = async () =>{
    try {
        const db= await mongoose.connect(MONGODB_URI)
        console.log('connect to db ',db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = database