var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var query = url.parse(req.url, true).query;
    var p = query.p;
    res.write(p);
    res.end();
}).listen(8080)