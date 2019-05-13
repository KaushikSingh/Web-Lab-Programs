<!DOCTYPE html>
<head></head>
<body>
<form action="process-get" method = "GET">
usn:<input type = "text" name="usn"/><br>
name:<input type = "text" name="name"/><br>
sex:<input type="text" name="sex"/><br>
sem:<input type = "text" name="sem"/><br>
branch:<input type = "text" name="branch"/><br>
college:<input type = "text" name="college"/><br>
<input type="submit" value="submit"/>
</form></body></html>


var express=require('express')
var app = express()
var bodyParser= require('body-parser')
var expressValidator= require('express-validator')
var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(expressValidator())
app.get('/week111.html',function(req,res){
	res.sendFile(__dirname+"/"+"week111.html");
})

app.get('/process-get',function(req,res){


var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/mydb007', function(err,db){
  if(err) 
    throw err;

var collection = db.collection('Student');
collection.insert({"usn":req.query.usn,"name":req.query.name,"sex":req.query.sex,"sem":req.query.sem,"branch":req.query.branch,"college":req.query.college}, function(err,docs){
 collection.count(function(err,count){
console.log("count = %s",count);

});

});

db.close();

});

res.end("<html><body>"+"usn "+req.query.usn+" name "+req.query.name);req.query.usn
});

var server = app.listen(5000,function(){
   console.log("listening");
})
