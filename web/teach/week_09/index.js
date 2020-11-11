const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
const url_lib = require('url');
const math = require('./math.js');


app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index');
})

app.get('/math', function (req, res) {
  var url = new URL(req.url, 'https://example.org/');
  var operation = url.searchParams.get('operation');
  var operand1 = url.searchParams.get('operand1');
  var operand2 = url.searchParams.get('operand2');
  
  var result = math(operation, operand1, operand2);
  
  console.log(result);
  res.render('pages/result', {
    result: result
  });
})

app.get('/math_service', function (req, res) {
  var url = new URL(req.url, 'https://example.org/');
  var operation = url.searchParams.get('operation');
  var operand1 = url.searchParams.get('operand1');
  var operand2 = url.searchParams.get('operand2');
  
  var result = math(operation, operand1, operand2);
  
  console.log(result);
  res.json({result: result});
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
