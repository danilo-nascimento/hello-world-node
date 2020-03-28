var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    getPages(req, res);
    
}).listen(8080)

function getPages(req, res){
    var query = url.parse(req.url, true).pathname;
    if (query === '/') query = '/index'
    getPageDocument("." + query, res);
}

function getPageDocument(page, res){
    console.log(page);
    fs.readFile(page + '.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end("Not found!");    
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}