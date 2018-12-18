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

  io.emit('newMessage',{
    from: 'Admin',
    text: 'Welcome to the Chat App',
    createAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage',{
    from: 'Admin',
    text: 'New User has joined',
    createAt: new Date().getTime()
  });

    socket.on('createMessage', (message) => {
      console.log('createMessage', message);

      io.emit('newMessage',{
        from: message.from,
        text: message.text,
        createAt: new Date().getTime()
      });

      // socket.broadcast.emit('newMessage',{
      //   from: message.from,
      //   text: message.text,
      //   createAt: new Date().getTime()
      // });
    });


  socket.on('disconnect', () =>{
    console.log('Disconnected');
  });


});



server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
