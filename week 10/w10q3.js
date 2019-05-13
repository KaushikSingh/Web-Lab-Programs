var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var expressValidator = require('express-validator')
app.use(expressValidator());
app.use(express.static('public'))
app.get('/form.html',function(req,res){
	res.sendFile(__dirname+"/"+"form.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {
req.checkBody('user_name','Invalid Name').isAlpha().notEmpty();
req.checkBody('semester','Invalid Semester').isNumeric();
var errors = req.validationErrors();
if(errors){
	res.send(errors);
}
else{
response = {
	user_name:req.body.user_name,
	branch:req.body.branch,
	semester:req.body.semester
	};
	console.log(response);
	console.log("Sent data are (POST) : user name:"+req.body.user_name+" and branch "+req.body.branch+" and semester "+req.body.semester);
	res.send("Sent data are (POST) : user name: <b>"+req.body.user_name+"</b> and branch <u> "+req.body.branch+"</u> and semester "+req.body.semester);
}
})

var server = app.listen(5002,function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app Listening at http://%s:%s",host,port)
})
