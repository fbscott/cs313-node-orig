var path        = require('path');
var express     = require('express');
var app         = express();

// var rate        = require('./rate.js');
var postageData = require('./data/postageData.json');

const PORT      = process.env.PORT || 5000;

// allow server to use anything that lives in /public
app.use(express.static(__dirname + '/public'));

// view engine
app.set('views', './views'); // object, directory
app.set('view engine', 'ejs'); // render .ejs files as views

/*******************************************************************************
 * controller
 ******************************************************************************/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.htm'));
});

app.get('/postage-rate', (req, res) => {
    var _url    = new URL(req.url, 'https://example.org/');
    var _type   = _url.searchParams.get('type');
    var _weight = _url.searchParams.get('weight');
    var Postage = require('./models/postage.js');
    var postage = new Postage({
        data: postageData,
        type: _type,
        weight: _weight
    });

    postage.getRate();

    res.render('pages/postage-rate', postage);
});

app.listen(PORT);
