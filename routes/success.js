var express = require('express');
var router = express.Router();
app.get('/success',function (req,res) {
    res.sendFile(path.join(__dirname,'./public',"thankyou.html"));
})
module.exports = router;
