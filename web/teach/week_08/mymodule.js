const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, list) {

        if (err) {
            return callback(err);
        }

        // for (var i = 0; i < list.length; i++) {

        //     if (list[i].split('.')[1] === ext) {
        //         callback(null, list[i]);
        //     }

        // }

        list = list.filter(function(file) {
            return path.extname(file) === '.' + ext
        });

        callback(null, list);

    });
}
