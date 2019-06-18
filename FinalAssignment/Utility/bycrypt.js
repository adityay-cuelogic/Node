const bcrypt = require("bcrypt");
const userModel = require("../User/model/userModel");
const saltRounds = 10;

const encryptData = (data) => {
    return new Promise( (resolve, reject) => {
        bcrypt.hash(data, saltRounds, function(err, hash) {
            if( err ) {
                reject(err);
            } else {
                resolve(hash);
            }
          });
    } )  
}

const compare = (requestData) => {
    return new Promise( (resolve, reject) => {
        userModel.where({
            userName: requestData.userName
        })
        .then( response => response )
        .then( response => {
            if( response.length === 0 ) {
                reject( "username password is not matching" );
            } else {
            bcrypt.compare(requestData.password, response[0].password, function(err, res) {
                res ? resolve(true) : reject( "Password is not matching" );
            });
            }
        } )
        .catch(error =>  reject(error) )
    })
}

module.exports.encryptData = encryptData; 
module.exports.compare = compare; 