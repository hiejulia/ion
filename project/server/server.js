var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var databaseConfig = require('./config/database');
var router = require('./app/routes');

var port = process.env.PORT || 3000;
//connect to mongodb
//mongoose.connnect(databaseConfig.url);

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
 
//router(app);


app.listen(port);
console.log('Running on port '+port);

