const fs = require('fs');

function files(callback) {

    fs.readdir(process.argv[2], function(err, list) {

        for (var i = 0; i < list.length; i++) {

            if (list[i].split('.')[1] === process.argv[3]) {
                callback(list[i]);
            }

        }

    });

}

function log(file) {

    console.log(file);

}

files(log);
