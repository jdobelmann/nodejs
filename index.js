const http = require('http');

const hostname = process.env.hostname || '0.0.0.0';
const port = process.env.PORT || 3002;

// define server
const server = http.createServer((request, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<style>\
    * {\
        font-family: "Comic Sans MS", "Comic Sans", cursive;\
        background-color: pink;\
        color: purple;\
    }\
    </style>\
    <h1>This is a Node.js demo</h1><br/><h2>This is the future</h2>')
})

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname};${port}/')
})