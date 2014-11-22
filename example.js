var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');



var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'KEY HERE',
    consumer_secret: 'KEY HERE',
    access_token_key: 'KEY HERE',
    access_token_secret: 'KEY HERE'
});


twit.search('lol', function(data) {
    console.log(util.inspect(data));
	
});



//app.get('/', twit.gatekeeper('/login'), routes.index);
//app.get('/login', routes.login);
//app.get('/twauth', twit.login());