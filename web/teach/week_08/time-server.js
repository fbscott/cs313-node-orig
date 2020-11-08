var net = require('net');



var server = net.createServer(function (socket) {
    var date = new Date();

    date.getFullYear();
    date.getMonth(); // starts at 0
    date.getDate();  // returns the day of month
    date.getHours();
    date.getMinutes();

    var timestamp = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0') + ' ' + date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + '\n';

    socket.write(timestamp);
    socket.end();
});

server.listen(parseInt(process.argv[2]));

// solution
/*
    'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
 */