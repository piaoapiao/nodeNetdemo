'use strict';

var express = require('express');

var PORT = 8888;

var app = express();
app.get('/', function (req, res) {
   console.log('received request');
  res.send('Hello world\n');
});


app.post("/some/path", function(req, res) {
	var startTime = new Date().getTime();
	//处理
	var body = processRequest(req);
	var endTime = new Date().getTime();
	var serverTime = endTime - startTime; 
	res.header("X-Server-Time", String(serverTime));
	 res.send(body);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
