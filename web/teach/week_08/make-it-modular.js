var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

function log(err, file) {
    if (err) {
        console.log(err);
    } else {
        console.log(file.join('\n'));
    }
}

mymodule(dir, ext, log);
