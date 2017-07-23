// server.js
// where your node app starts
const strftime = require('strftime');

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/:time', (req, res) => {
  var str = req.params.time;
  
  var response = {
    unix: null,
    natural: null
  };

  if (str.match(/^\d+$/)) {
    str = parseInt(str) * 1000;
  }
  
  var date = new Date(str);
  if (!isNaN(date.getTime())) {
    response.unix = date.getTime() / 1000;
    response.natural = strftime('%B %e, %Y', new Date(date.getTime())).replace('  ', ' ');
  }
  res.json(response);
});

/*app.get("/dreams", function (request, response) {
  response.json(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];*/

app.use((req, res, next) => {
  

  // Here lies my fallen regex
  // var calendarMatch = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:.*?)(\d{2})(?:.*?)(\d{4})/;
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
