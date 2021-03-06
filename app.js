const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');
const mongo = require('mongodb').MongoClient;
let database;
var mysql      = require('mysql');
var msConnection = mysql.createConnection({
    host     : 'kickstarter.csleyuda1sih.us-east-1.rds.amazonaws.com',
    user     : 'Sargis',
    password : 'hovik2011',
    database : 'Scally'
});

const url = "mongodb://pyotr:shaurma@ds133582.mlab.com:33582/scally";
const mongoose=require('mongoose');
mongoose.connect(url);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error....'));
db.once('open',function callback() {
    console.log("Db opened");
})
var Schema=new mongoose.Schema({
    id:String,
    mail:String
});
var app = express();
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
const userDb=mongoose.model('user',Schema);
app.post('/submit', function (req, res) {
    let userMail = req.body.email;
    let email = {mail: userMail};
    try {
        insertMysql(userMail);
    }
    catch(err){
        console.log("Error while inserting into mysql");
    }

    new userDb({
        mail: userMail
    }).save(function (err, doc) {
        if (!err) {
            res.send("SUCCESS");
        }
        else{
            console.log("Error in mongodb");
        }
    });
});
function insertMysql(mail) {
    msConnection.connect((err)=>{
        if(err) {
            console.log(err);
            console.log("Error while connecting to database");
        }
        else{
            var sql = "INSERT INTO users (mail) VALUES ('"+mail+"')";
            if(msConnection!=undefined) {
                msConnection.query(sql, function (err, result) {
                    if (!err) {
                        console.log("1 record inserted");
                    }
                });
            }
        }
    });

}
app.get('/success', function (req, res) {
    res.sendFile(path.join(__dirname, './public', "thankyou.html"));
})
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
