var express = require("express");
var app =express();
//var bodyParser = require('body-parser');

var port = process.env.PORT || 8088;

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("App listening on port: "+port);
	}
});

app.get('/', function(req, res){
	res.send({message: "done"});
});

module.exports = app;