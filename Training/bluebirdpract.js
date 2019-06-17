const http = require("http");
const Promise = require("bluebird");
// Promise.promisifyAll(fs);
Promise.promisifyAll(http);
// fs.readFileAsync("copy.txt", "utf-8")
// .then(response => console.log("response = ", response)).catch(error => console.log(error));

class Server {
    createServers() {
        try {
            let server = http.createServerAsync().then( response => {
                server.listen(process.env.PORT);
                console.log("response = ", response );
            } ).catch( response => response );
            ;
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

new Server().createServers();