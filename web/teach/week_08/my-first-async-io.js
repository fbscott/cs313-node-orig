const fs = require('fs');

var newLines;

function findNewLines(callback) {

    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        newLines = fileContents.toString().split('\n');

        callback()
    })
}

function logMyNumber() {
    console.log(newLines.length - 1);
}

findNewLines(logMyNumber);

// instructor solution
/*    
    'use strict'
    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/
