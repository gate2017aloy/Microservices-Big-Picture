const http = require('http');
const PORT = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello world!')
})

server.listen(PORT, () => console.log(`server started on port ${PORT}; ` +
    'press Ctrl-C to terminate....'))
