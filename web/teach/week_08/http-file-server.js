var fs = require('fs');
var http = require('http');
var path = process.argv[3];

const server = http.createServer(function (req, res) {
    var src = fs.createReadStream(path);
    src.pipe(res);
})

server.listen(process.argv[2])

// solution

/*
    'use strict'
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
 */
