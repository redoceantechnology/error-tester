const http = require('http');

var i = 0;

http.createServer(function (req, res) {
    if (i > 5) {
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.write("Error");
        i= 0;
    }
    else {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write("OK");
        i++;
    }
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}
