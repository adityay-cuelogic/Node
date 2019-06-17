const Http = require("http");
const server = Http.createServer( ( req, res ) => {
    if( req.url === "/" ) {
        res.writeHead(200, {'Content-type': 'text-plain'});
        res.write({"message":"This is the new world"});
        res.end();
    }
} );
server.listen(3000);