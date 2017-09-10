var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
const mongo = require('mongodb').MongoClient;

let database;


const url = "mongodb://pyotr:shaurma@ds133582.mlab.com:33582/scally";
/*var submit=require('./routes/submit');
var success=require('./routes/success');*/
var app = express();
app.use(express.static('public'));
/* "scripts": {
   "start": "node ./bin/www"
 },*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.post('/submit', function (req, response) {
    let userMail = req.body.email;
    let email = {mail: userMail};
    console.log("---------------------Submit----------------------------");

    database.collection("user").insertOne({mail: userMail}, function (err, res) {
        if (err) {
            var error = err.statusCode;
            var status = err.status;
            console.log("error-------------------"+error+"-------------------");
            console.log("status "+status+"---------------------");
        }
        else {
            console.log("success -----");
            response.redirect('/success');
        }
    })
});
app.get('/success', function (req, res) {
    res.sendFile(path.join(__dirname, './public', "thankyou.html"));
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
