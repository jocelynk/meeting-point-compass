/*
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(process.env.PORT || 8080);
console.log(process.env.PORT)

io.sockets.on('connection', function (socket) {
    socket.on('location', function (data) {
        io.sockets.emit('location', data);
    });
});*/

/*
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 8080);
console.log(process.env.PORT);
console.log(io);

app.get('/', function (req, res) {
    res.send("asdfasdf")
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('location', function (data) {
        io.sockets.emit('location', data);
    });
});*/

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8888);


function handler (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Sockets connected');
}

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('location', function (data) {
        io.sockets.emit('location', data);
    });
});
