const http = require('http');
const url = process.argv[2];

var string = '';
var count = 0;

function log(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
        string += data;
    });

    response.on('end', function() {
        count = string.length;
        console.log(count + '\n' + string);
    });
}

http.get(url, log);

// instructor solution

/*
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
 */
