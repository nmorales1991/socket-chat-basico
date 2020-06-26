const express = require('express');
const socketIO = require('socket.io')
const http = require('http')

const app = express();
let server = http.createServer(app)

const port = process.env.PORT || 3001;

module.exports.io = socketIO(server)

require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
