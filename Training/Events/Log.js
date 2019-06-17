const EventEmitter =  require("events");
class Logger extends EventEmitter{
    test(message) {
        this.log(message);
       }
    log(message) {
     console.log("message  = ", message );
     this.emit("messageLogged", message);
    }
}

module.exports = Logger;