const http = require('http');

var results = [];
var count = 0;

function log() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
        var string = '';

        response.setEncoding('utf8');

        response.on('data', function(data) {
            string += data;
        });

        response.on('end', function() {
            results[index] = string.toString();

            count++;

            if (count === 3) {
                log();
            }
        });
    });
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}

/*
    'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
 */