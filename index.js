const Readline = require('@serialport/parser-readline')
const SerialPort = require('serialport');
const SocketIO = require('socket.io');
const path = require('path');
const express = require('express');
const serial = SerialPort.SerialPort;
const app = express();
//settings 
app.set('port', process.env.PORT || 3000);
//Static File
app.use(express.static(path.join(__dirname, 'public')));
// start Server
const server = app.listen(app.get('port'), () => {
    console.log(`Iniciado en puerto ${ app.get('port') }`);
});
const io =SocketIO(server);
//WebSocket

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
//Port
const mySerial = new SerialPort('COM4', {
    baudRate: 9600
})
const parser = mySerial.pipe(new Readline({delimiter: '\r\n'}))
mySerial.on('open', ()=>{
    console.log('Conexion a puerto Serial');
})
parser.on('data', (data) => {
    var v = JSON.parse(data);
    console.log(v)
    io.emit('dataserial', v);
})

mySerial.on('err', (err) =>{
    console.log(err.message);
})