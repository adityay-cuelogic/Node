const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

class CreateConnection {
    connection() {
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
        .then( () => {
            console.log("connection succesfull")
        } )
        .catch( error => console.log("error = ", error) );
    }
}
module.exports = CreateConnection