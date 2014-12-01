//lots o variables. 
var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app)
var fs = require('fs')
var io = require('socket.io').listen(server);
var sentiment = require('sentiment');


//starting server
app.get('/', function(req, res){
res.sendFile(__dirname + '/workspace/rideclub_proto.html');

});

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000, function(){
console.log('Server running at http://127.0.0.1:3000/... http://3000 or something...');
});

//displays sentiment. 
var sentTest = sentiment('Yeah. I can do the right thing the wrong way, I can peel all the stressors from a long day... She loves me like she means it ') //-busdriver
console.dir(sentTest);


//twitter stuff.
var util = require('util'),
twitter = require('twitter');

var twit = new twitter({
consumer_key: '',
consumer_secret: '',
access_token_key: '',
access_token_secret: ''
});

twit.search('#burlyrides', function(data) {
console.log(util.inspect(data));
});


//trying to use socket to display tweetz on page...
/*
var flag = ['burlyrides', 'rides']

io.sockets.on('connection', function (socket) {
  console.log('woah! This actually worked!');


 var stream = twit.stream('statuses/filter', { track: flag })

  stream.on('tweet', function (tweet) {

    io.sockets.emit('stream',tweet.text);
 });
}); 
*/


