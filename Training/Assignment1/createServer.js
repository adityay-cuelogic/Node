const http = require("http");
const dotenv = require('dotenv').config();

class Server {
    createServers() {
        try {
            let server = http.createServer( ( req, res ) => {
                if(req.url == '/adi'){
                    req.msg = "adi"
                    this.handleResponse(req, res);
                } else {
                    res.write("The End!");
                    res.end();
                }
            });
            server.listen(process.env.PORT);
        } catch(error) {
            console.log("Error = ", error );
        }   
    };

    handleResponse(req, res){
         res.writeHead(200,{'Content-type': 'text-plain'});
         res.write("hello "+req.msg);
         res.end()
 
    }
}

module.exports = Server;