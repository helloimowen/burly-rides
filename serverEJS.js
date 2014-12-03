var express = require('express');
var app = express();
var path = require('path');
var sentiment = require('sentiment');

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

//twitter stuff.
var util = require('util');
var twitter = require('twitter');

var twit = new twitter({
consumer_key: '',
consumer_secret: '',
access_token_key: '',
access_token_secret: ''
});

app.get('/', function(req, res) {
    twit.search('#tybg', function(data) {
        var stringTw = JSON.stringify(data);
        var JSONTw = JSON.parse(stringTw);
        

        
        //console.log(util.inspect(data));
        //console.log(util.inspect(data));
        //console.log(util.inspect(JSONTw));

    
    var test = "#burlyrides";

	
	
	var fakeTwitter = [
    { id: 1, name: "coolguy99", lat: 44.482870, lon: -73.216312, text: "I love everything. Cool stuff all around." },
    { id: 2, name: "IhateBees", lat: 44.472496, lon: -73.218198, text: "I hate bees more than I hate everything else." },
    { id: 3, name: "EverythingIsPain33", lat: 44.477730, lon: -73.195035, text: "I hate myself and I want to die." },
];

/*
  	var sent1 = sentiment ("I love everything. Cool stuff all around.");
	var sent2 = sentiment ("I hate bees more than I hate everything else.");
	var sent3 = sentiment ("I hate myself and I want to die.");
*/
    
	res.render('rideclub_proto', {
        data : data,
        stringTw : stringTw,
        JSONTw : JSONTw,
        test : test,
		fakeTwitter : fakeTwitter

        });
   });

});



app.listen(3000);
console.log('What? Working?');