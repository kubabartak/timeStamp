var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
var months=["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function fromUnix(unix){
var date= new Date(unix*1000);
var result= months[date.getMonth()] +" "+date.getDate()+", "+ date.getFullYear();
return result;}
function fromStr(str){
    var date=new Date(str);
    var result= months[date.getMonth()] +" "+date.getDate()+", "+ date.getFullYear();
return result;
}

router.get("/:time", function(req, res){
    if (!isNaN(req.params.time)) {
        var natural=fromUnix(req.params.time)
        data= {natural: natural,
             unix: req.params.time };
        res.json(data);
    } else {
        var natural =new Date(req.params.time);
        if(!isNaN(natural)) {
            var unix= natural/1000;
            var result = fromStr(req.params.time);
            data= {natural: result,
             unix: unix};
        res.json(data);
        } else {
            res.json({ unix: null, natural: null })
        }
    } 
})
module.exports = router;
