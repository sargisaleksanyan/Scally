var express = require('express');
var router = express.Router();
router.get('/success',function (req,res,next) {
  //  res.sendFile(path.join(__dirname,'./public',"thankyou.html"));
    res.send('Success');

})
module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });

});

module.exports = router;