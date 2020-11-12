const PATH         = require('path');
const EXPRESS      = require('express');
const APP          = EXPRESS();
const POSTAGE_DATA = require('./data/postageData.json');
const PORT         = process.env.PORT || 5000;
const POSTAGE      = require('./models/postage.js');

// allow server to use anything that lives in /public
APP.use(EXPRESS.static(__dirname + '/public'));

// view engine
APP.set('views', './views'); // object, directory
APP.set('view engine', 'ejs'); // render .ejs files as views

/*******************************************************************************
 * controller
 ******************************************************************************/
APP.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname + '/public/index.htm'));
});

APP.get('/postage-rate', (req, res) => {
    var _url         = new URL(req.url, 'https://example.org/');
    var _type        = _url.searchParams.get('type');
    var _weight      = _url.searchParams.get('weight');
    var postageModel = new POSTAGE({
        data: POSTAGE_DATA,
        type: _type,
        weight: _weight
    });

    postageModel.getRate();

    res.render('pages/postage-rate', postageModel);
});

APP.listen(PORT);
