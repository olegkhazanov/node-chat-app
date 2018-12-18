const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000;

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('Net user connected');

  socket.emit('newMessage', {
      from: 'server',
      text: 'Hey. What is going on.',
      createAt: 123
    });

    socket.on('createMessage', (message) => {
      console.log('createMessage', message);
    });


  socket.on('disconnect', () =>{
    console.log('Disconnected');
  });


});



server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
