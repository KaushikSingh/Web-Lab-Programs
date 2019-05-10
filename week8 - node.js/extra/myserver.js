

// var my_http = require('http');

// my_http.createServer(function (request,response){
// 	response.writeHeader(200,{'Content-Type':'text/plain'});
// 	response.write('Hello msrit');
// 	response.end();

// }).listen(5000)

// console.log('Server is running.....on 5000')


//to install static server to run html files
// npm install connect serve-static

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(5000, function(){
    console.log('Server running on 5000...');
});