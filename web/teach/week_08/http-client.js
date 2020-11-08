var url = process.argv[2];
var http = require('http');

// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//    // document.getElementById("result").innerHTML = this.responseText;
//    console.log(this.responseText);
//   }
// };

// xhttp.open("GET", url, true);
// xhttp.send();

function log(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
        console.log(data);
    });
}

http.get(url, log);

// instructor solution

/*
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/
