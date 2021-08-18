const path = require('path');
const express = require('express');
const app = express();
//settings 
app.set('port', process.env.PORT || 3000);
console.log(process.env.PORT);
//Static File
app.use(express.static(path.join(__dirname, 'public')));
// start Server
const server = app.listen(app.get('port'), () => {
    console.log(`Iniciado en puerto ${ app.get('port') }`);
});
//WebSocket
const SocketIO = require('socket.io');
const io =SocketIO(server);

io.on('connection', (socket) =>{
    console.log('Conection New', socket.id)

    socket.on('chat-message', (data) => {
        io.sockets.emit('ServerMessage', data);
        console.log(data);
    })

    socket.on('Message', (data) => {
        console.log(data);
    })
});