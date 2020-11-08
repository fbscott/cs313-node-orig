// console.log(process.argv);

var num = 0;

function sum(callback) {

    for (var i = 2; i < process.argv.length; i++) {
        num += parseInt(process.argv[i]);
    }

    callback();
}

function log() {
    console.log(num);
}

sum(log);

// solution

/*
    'use strict'

    let result = 0

    for (let i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result)
 */
