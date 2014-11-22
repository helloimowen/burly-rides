
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/workspace/rideclub_proto.html');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/workspace/css/style.css');
});
http.listen(3000, function(){
  console.log('Server running at http://127.0.0.1:3000/... http://3000 or something...');
});
/*
//twitter stuff. Will use l8r
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'KEY HERE',
    consumer_secret: 'KEY HERE',
    access_token_key: 'KEY HERE',
    access_token_secret: 'KEY HERE'
});


twit.search('burlyrides OR #burlyrides', function(data) {
    console.log(util.inspect(data));
	
});
//still having trouble finding kyle's stuff. 

app.get('/', twit.gatekeeper('/login'), routes.index);
app.get('/login', routes.login);
app.get('/twauth', twit.login());
*/