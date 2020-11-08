// our non-working code

const http = require('http')
const map = require('through2-map')
const url = require('url');

const server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    return res.end('send me a GET\n')
  }

  var info = new URL(req.url, 'https://example.org/');

  if (/^\/api\/parsetime/.test(req.url)) {
    req.pipe(map(function (res) {
        var iso_query_string = info.searchParams.get('iso');
        var date = new Date(iso_query_string);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
    })).pipe(res)
  }

  if (/^\/api\/unixtime/.test(req.url)) {
    req.pipe(map(function (res) {
        var iso_query_string = info.searchParams.get('iso');
        var date = new Date(iso_query_string);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({unixtime: Math.round(date/1000)}));
    })).pipe(res)
  }

})

server.listen(Number(process.argv[2]))

// solution

/*
    'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
 */