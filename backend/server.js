const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Backend is running');
});

server.listen(3000, function() {
    console.log('Backend running on port 3000');
});
