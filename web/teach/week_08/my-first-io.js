const fs = require('fs');

// var bufferObj = fs.readFileSync('./readme.txt');
var bufferObj = fs.readFileSync(process.argv[2]);

var newLines = bufferObj.toString().split('\n');

console.log(newLines.length - 1);

// solution

/*
    'use strict'
    const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
 */
