const mongoose = require("mongoose");
class CreateConnection {
     connection() {
        mongoose.connect("mongodb://localhost:27017/userdb",{useNewUrlParser: true})
        .then(() => console.log("Connection established"))
        .catch(error => console.log(error));
    }
}

module.exports = CreateConnection