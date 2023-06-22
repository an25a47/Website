const express = require('express');
const WebSocket = require('websocket').server;
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname));

const wsServer = new WebSocket({
    httpServer: server
});

let connection = null;

wsServer.on('request', request => {
    connection = request.accept(null, request.origin);
    connection.on('message', message => {
        if (connection) {
            connection.sendUTF(message.utf8Data);
        }
    });
    connection.on('close', () => {
        connection = null;
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
