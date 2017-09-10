/**
 * Created by sargis on 6/19/17.
 */
const express=require('express');
const app=express();
const path=require('path');
const mongo=require('mongodb').MongoClient;
const bodyParser=require('body-parser');
let database;
app.set('port',process.env.PORT||3000);
app.use(express.static('public'));
const url="mongodb://pyotr:shaurma@ds133582.mlab.com:33582/scally";
//const url="ds133582.mlab.com:33582/scally -u pyotr -p shaurma

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
  // res.sendFile(path.join(__dirname,'./public',"index.html"));
    res.render('index', { title: 'Express' });
});
app.post('/submit',function(req,response){
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
app.get('/success',function (req,res) {
    res.sendFile(path.join(__dirname,'./public',"thankyou.html"));
})
mongo.connect(url,function (err,db) {
    if(!err){
        database=db;
    }
})
app.listen(3000);