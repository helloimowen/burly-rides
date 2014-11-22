var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/... http://3000 or something...');



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


//app.get('/', twit.gatekeeper('/login'), routes.index);
//app.get('/login', routes.login);
//app.get('/twauth', twit.login());