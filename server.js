var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

//Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the catch-all route

// Catch all routes
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 not 3000
var port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on ${port}`)
});