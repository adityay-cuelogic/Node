const mongoose = require("mongoose");

const UserSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    password: String,
    address: String,
    age: Number,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User",UserSchema);