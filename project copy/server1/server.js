const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoosePaginate = require('mongoose-paginate'),  
      expressPaginate = require('express-paginate'); 
const morgan = require('morgan');
const LocalStorage = require('node-localstorage').LocalStorage;
const request = require('request');
const databaseConfig = require('./config/database');
const router = require('./app/routes');

const flash = require('connect-flash'); 
// Get environment or set default environment to development
const ENV = process.env.NODE_ENV || 'development';
const DEFAULT_PORT = 8080;
const DEFAULT_HOSTNAME = '127.0.0.1';
const config = require('./config');

 
mongoose.connect(databaseConfig.url);
 
// app.use(expressPaginate.middleware(limit, maxLimit)); 
app.use(morgan('dev'));  
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());//cors 

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
router(app);


// router.use(function(req,res,next) {
//     res.locals.currentUser = req.user;
//     res.locals.errors = req.flash('errors');
//     res.locals.infos = req.flash('info');
//     next();
// })
//this req.user is populated by passport 


app.listen(process.env.PORT || 8080);//listen on port 8080
console.log(`Server is running on port 8080`);