var express = require('express');

var app = express();
app.use(express.logger());
app.post('/submitReview', function(req, res){
	console.log("received:" + req);
	res.send('handled submitReview')});
app.use(express.static(__dirname + "/../build"));

app.listen(8000);