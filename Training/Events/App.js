const Logger = require("./Log");
const objLogger = new Logger();

// If this called after objLogger.log(), it will not work as emit needs to be triggered first so that it will call all the
// listeners synchronously
objLogger.on("messageLogged", function(message) {
    console.log("The messgae was: ", message);
})

objLogger.log("This is a test");

// This will not be called as its called after objLogger.log i.e. after emit()
objLogger.on("messageLogged", function(message) {
    console.log("The messgae was1: ", message);
})