var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


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




/*
app.get('/', function(req, res) {
    var test = "I hate myself and I want to die.";


    res.render('rideclub_proto', {
		test: test
	});


});
*/



app.get('/', function(req, res) {
    twit.search('#tybg', function(data) {
        var stringTw = JSON.stringify(data);
        var JSONTw = JSON.parse(stringTw);
        

        
        //console.log(util.inspect(data));
        //console.log(util.inspect(data));
        //console.log(util.inspect(JSONTw));

    
    var test = "___I am tired. Help.";
    
  
        
    
	res.render('rideclub_proto', {
        data : data,
        stringTw : stringTw,
        JSONTw : JSONTw,
        test : test
        });
   });

});



app.listen(3000);
console.log('What? Working?');