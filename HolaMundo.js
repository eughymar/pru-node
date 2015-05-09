var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hola Mundo!\n');
}).listen(7333);

console.log('Servidor ejecutándose en http://127.0.0.1:7333/');