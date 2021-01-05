// require packages
var express = require('express');
var requestHandler = require('./Controllers/requestsHandler');

// create an instance of express
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// used to serve-up static files
app.use('/assets', express.static('assets'));

app.listen(3000);

requestHandler.requestHandler(app);