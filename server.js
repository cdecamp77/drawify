var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
const mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var logger = require('morgan');

var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

require('dotenv').config();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the catch-all route
// app.use('/api', require('./routes/api'));

// Catch all routes
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// routes
require('./routes/routes.js')(app, passport);

// Configure to use port 3001 not 3000

app.listen(port, function() {
    console.log(`Express app running on ${port}`)
});