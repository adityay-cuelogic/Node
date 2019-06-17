const dotenv  = require('dotenv').config()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'Aditya';
const someOtherPlaintextPassword = 'not_bacon';

let originalHash;



console.log(process.env.PORT);
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        originalHash = hash;
        console.log(hash);
        comparePassword(originalHash);
    });
});

function comparePassword(hash) {
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        console.log("res", res);
    });
}

bcrypt.genSalt(saltRounds)
.then( salt => {
    comparePassword(salt);
} );