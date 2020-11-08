var http = require('http');
var map = require('through2-map');


const server = http.createServer(function (inStream, outStream) {
    inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(outStream);
})

server.listen(process.argv[2])

// solution

/*
    'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
 */