const http = require('http');

const hostname = process.env.hostname || '0.0.0.0';
const port = process.env.PORT || 3002;

// define server
const server = http.createServer((request, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!  This is text - we can respond with HTML and JSON')
})

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname};${port}/')
})