
const express = require('express');
const bodyParser = require('body-parser');
const HandlerGenerator = require("./controller");
let middleware = require('./middleware');

// Starting point of the server
function main () {
  let app = express(); // Export app for other routes to use
let handlers = new HandlerGenerator();
  const port = process.env.PORT || 8000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());
  // Routes & Handlers
  app.post('/login', handlers.login);
  app.get('/', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();