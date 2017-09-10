var express = require('express');
var router = express.Router();
const mongo=require('mongodb').MongoClient;
let database;
const url="mongodb://pyotr:shaurma@ds133582.mlab.com:33582/scally";
router.post('/submit',function(req,response,next){
    let userMail=req.body.email;
    let email={mail:userMail};
    database.collection("user").insertOne({mail:userMail},function (err,res) {
        if(err){
            var error= err.statusCode;
            var status=err.status;
            console.log(err);
        }
        else{
            response.redirect('/success');
        }
    })
});
module.exports = router;
