const express = require("express");
const Connection = require("./connection");
const obj = new Connection();
obj.connection();
let app = express();

app.use(express.json());

app.use("/api/users", require("./User/UserRouter") );

app.listen(3000);