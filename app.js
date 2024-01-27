var createError = require('http-errors');
var express = require('express');
require('./config/config.js');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var cryptoService = require('./service/crypto.js');
var cors = require('cors');
var usersRouter = require('./routes/users');
var app = express();
require('./models');
require('./service/firebase.service.js');
require('./generalFunctions.js');
// var Drive=require('./service/drive.service.js');



// Drive.authorize().then(() => console.log("Drive Connected..!"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(async function (req, res, next) {
  if (req && req.headers && req.headers.authorization) {
    try {
      let data = await cryptoService.decrypt(req?.headers?.authorization);
      if (data) req.headers.authorization = data;
    } catch (e){ throw new Error(e.message);}
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Controll-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
  res.setHeader('Access-Controll-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
