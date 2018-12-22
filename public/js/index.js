var socket = io();

socket.on('connect',() =>{
  console.log('Connected to server');
});

socket.on('disconnect',() =>{
  console.log('DisConnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
