const Https = require("https");
const fs  = require("fs");
const path = require("path");

const options = {
    cert:fs.readFileSync(path.join(__dirname,"ssl","server.crt")),
    key: fs.readFileSync(path.join(__dirname,"ssl", "server.key"))
}
let server = Https.createServer( options, ( request, response ) => {
    console.log("request = ", request.url);
    response.write("Hello world");
    response.end();
} );

server.listen(3443);