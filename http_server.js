const http = require('http');

let json_response = {"version": "1.0.0"}

http.createServer((request, response) =>{
    console.log("Creating server...")
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.write(JSON.stringify(json_response));
    response.end();
}).listen(9956);