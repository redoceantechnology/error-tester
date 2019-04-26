const http = require('http');

var i = 0;
var err = 0;
var ERROR_THRESHOLD = 7;
var RANDOM = randomInt(5, 15);

try {
    require('C:\\Program Files\\Dynatrace\\dynatrace-oneagent-7.2\\agent\\bin\\any\\onenodeloader.js')({
        server: 'https://localhost:8043',
        agentName: 'Test_NodeJS'
    });
} catch (err) {
    console.error(err.toString());
}

http.createServer(function (req, res) {
    if (i === RANDOM) {
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.write("Error");
        err++;
        if (err === ERROR_THRESHOLD) {
            i = 0; //resets the counter
            err = 0;
            RANDOM = randomInt(5, 15);
        }
    } else {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write("OK");
        i++;
    }
    res.end(); //end the response
}).listen(8888); //the server object listens on port 8080


function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}
