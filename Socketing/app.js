const app = require("express")();
const http = require("http").Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});
var clients = 0;
//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected',socket);
   setTimeout(function() {
       console.log("iNsise fuctin");
    socket.send('Sent a message 4seconds after connection!');
 }, 4000);
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });

   clients++;
   // To send message to all the clients about the no of connections.
   //    socket.emit('broadcast',{ description: clients + ' clients connected!'});

   // To send message to the  existing clients about the no of connections and a welcome messsage to the new one.
   socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
   socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})

   socket.on('disconnect', function () {
      clients--;
      io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
   });
});

http.listen(3000);

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res) {
//     res.sendFile('index.html', { root: __dirname });
// });

// //Whenever someone connects this gets executed
// io.on('connection', function(socket) {
//    console.log('A user connected');

//    //Whenever someone disconnects this piece of code executed
//    socket.on('disconnect', function () {
//       console.log('A user disconnected');
//    });
// });

// http.listen(3000);