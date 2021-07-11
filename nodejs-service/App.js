// const http = require('http');
// const dummyPkg = require('./src/DummyPackage')
const express = require('express')
const chalk = require('chalk')

const db = require('./src/DB')
const home = require('./src/routes/home')
// console.log(express)

const PORT = process.env.PORT || 8000

const server = express()
// console.log(server.get)

// server.get('/', home.homePageRender)
server.get('/', home.homePageQueryRenderer)
server.get('/:id', home.homePageParamRenderer)
// db.demo()



// console.log(dummyPkg)
// The server object is an event emitter

// const reqListener = (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('Hello world!')
// }
//
// const server = http.createServer()
//
// server.on('request', reqListener)
//
// // console.log(server)
// // console.log(server._events)

server.listen(PORT, () => console.log(`server started on port ${chalk.green(PORT)}; ` +
    'press Ctrl-C to terminate....'))
