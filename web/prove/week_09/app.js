/*******************************************************************************
 * controller
 ******************************************************************************/

const PATH         = require('path');
const EXPRESS      = require('express');
const APP          = EXPRESS();
const POSTAGE_DATA = require('./data/postageData.json');
const POSTAGE      = require('./models/postage.js');
const PORT         = process.env.PORT || 5000;

// allow server to use anything that lives in /public
APP.use(EXPRESS.static(__dirname + '/public'));

// view engine
APP.set('views', './views'); // object, directory
APP.set('view engine', 'ejs'); // render .ejs files as views

APP.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname + '/public/index.htm'));
});

APP.get('/postage-rate', (req, res) => {
    let _url         = new URL(req.url, 'https://example.org/');
    let _type        = _url.searchParams.get('type');
    let _weight      = _url.searchParams.get('weight');
    let postageModel = new POSTAGE({
        data: POSTAGE_DATA,
        type: _type,
        weight: _weight
    });

    // set the desired rate on the model
    postageModel.setRate();

    res.render('pages/postage-rate', postageModel);
});

APP.listen(PORT);
