const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const logger = require("./middleware/logger");
const cors = require("cors");
const app = express();

//Init Middleware
app.use(logger);

//Body parser Middleware
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(cors());

app.use("/api/members", require("./component/test/router/testrouter"));

app.post('/login',
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT}`));
