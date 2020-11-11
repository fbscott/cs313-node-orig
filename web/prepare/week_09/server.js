var express = require('express');
var app     = express();
var User    = require('./models/user.js');
// var Welcome = require('./views/welcome.js');

// allow server to use anything that lives in /public
app.use(express.static('public'));

// view engine
app.set('views', './views'); // object, directory
app.set('view engine', 'ejs'); // render .ejs files as views

// app.get('/', (req, res) => {
//     console.log('Received request for /');

//     res.write('This is root');
//     res.end();
// });

app.get('/', handleRouteRequest);

/*******************************************************************************
 * controller
 ******************************************************************************/
app.get('/home', (req, res) => {
    var user = new User({
        first: 'Scott',
        last: 'Currell',
        program: 'Software Engineering'
    });
    // var welcome = new Welcome(res, user.name);

    // welcome.render(); // using the Welcome class from welcome.js
    res.render('welcome', user); // using the view from welcome.ejs
                           // need to npm install ejs
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

function handleRouteRequest(req, res) {
    console.log('Received request for ' + req.url);
}
