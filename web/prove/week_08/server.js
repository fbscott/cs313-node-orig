const http = require('http');
// const url  = require('url');
const path = require('path');
const fs   = require('fs');

const PORT = process.env.PORT || 8888;
const Person = require('./person.js');
const person = new Person('Scott', 'cs313');

function onRequest(req, res) {
    console.log('Recieved request for: ' + req.url);

    switch (req.url) {
        case '/':
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(person.greeting());
            res.end();
            break;
        case '/home':
            fs.readFile(path.join(__dirname, 'public', 'index.htm'), 'utf8', (err, content) => {
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(content);
            });
            break;
        case '/getData':
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(person));
            break;
        default:
            fs.readFile(path.join(__dirname, 'public', 'page-not-found.htm'), 'utf8', (err, content) => {
                if (err) throw err;
                // console.log({
                //     dirname: __dirname,
                //     path: path.dirname(__dirname),
                //     content: content,
                //     request_url: req.url,
                //     args: [process.argv[0], process.argv[1]]
                // });
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(content);
            });
    }
}

var server = http.createServer(onRequest);

server.listen(PORT, () => console.log('Server running on port ' + PORT));
