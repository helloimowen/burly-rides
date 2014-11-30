
var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app)
var io = require('socket.io').listen(server);


app.get('/', function(req, res){
res.sendFile(__dirname + '/workspace/rideclub_proto.html');

});

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000, function(){
console.log('Server running at http://127.0.0.1:3000/... http://3000 or something...');
});

var flag = ['burlyrides', 'rides']


//twitter stuff. Will use l8r
var util = require('util'),
twitter = require('twitter');

var twit = new twitter({
consumer_key: '',
consumer_secret: '',
access_token_key: '',
access_token_secret: ''
});

io.sockets.on('connection', function (socket) {
  console.log('woah! This actually worked!');


 var stream = twit.stream('statuses/filter', { track: flag })

  stream.on('tweet', function (tweet) {

    io.sockets.emit('stream',tweet.text);
 });
}); 

/*
twit.search('#burlyrides', function(data) {
console.log(util.inspect(data));
});

*/