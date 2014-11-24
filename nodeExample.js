
var express=require('express');
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
app.get('/', function(req, res){
res.sendFile(__dirname + '/workspace/rideclub_proto.html');
});
app.use(express.static(path.join(__dirname, 'public'))); //need to redefine 'app' and 'express'
http.listen(3000, function(){
console.log('Server running at http://127.0.0.1:3000/... http://3000 or something...');
});

//twitter stuff. Will use l8r
var util = require('util'),
twitter = require('twitter');
var twit = new twitter({
consumer_key: 'Rj3Gak3eLOGRB6SMcMSxTijMk',
consumer_secret: 'hTUpVb4714tqSysiLrioKxF07a6evgUHgF22Xl5zUR4nM4ZukQ',
access_token_key: '2881726402-5C0t2zmremomnb2hzQvsCXAncTbEYosbKNYO8yx',
access_token_secret: '4hyDEDpL6tB4mJz4MY3SAC6WwjSRj9D2fPUNVUwyqhPvS'
});
twit.search('#burlyrides', function(data) {
console.log(util.inspect(data));
});
/*
//still having trouble finding kyle's tweetz. It does pull in popular hashtags though!
app.get('/', twit.gatekeeper('/login'), routes.index);
app.get('/login', routes.login);
app.get('/twauth', twit.login());
*/