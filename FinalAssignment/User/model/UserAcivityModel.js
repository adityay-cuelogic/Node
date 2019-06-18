const mongoose = require("mongoose");
// const Connection = require("../../connection");
// const obj = new Connection();
// obj.connection();
const UserActivitySchema =  mongoose.Schema({
    userName: String,
    lastLogin: Date
});

module.exports = mongoose.model("UserActivity",UserActivitySchema);