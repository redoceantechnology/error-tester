const http = require('http');

var i = 0;
var ERROR_THRESHOLD = 5;

http.createServer(function (req, res) {
    if (i > ERROR_THRESHOLD) {
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.write("Error");
        i = 0; //resets the counter
    }
    else {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write("OK");
        i++;
    }
    res.end(); //end the response
}).listen(8888); //the server object listens on port 8080


function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}
