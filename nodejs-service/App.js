// const http = require('http');
// const dummyPkg = require('./src/DummyPackage')
const swaggerJsdoc  = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition : {
        info: {
            title: 'homePageQueryRenderer',
            description: 'API description',
            contact: {
                name: 'Aloy'
            },
            servers: ['http://localhost:8000'],
            apis: ['./src/routes/*.js']
        }
    }
}

// const swaggerDocs = swaggerJsdoc(swaggerOptions)

const express = require('express')
const chalk = require('chalk')

const db = require('./src/DB')
const home = require('./src/routes/home')
const homeRouter = require("./src/routers/homeRouter");
// console.log(express)

const PORT = process.env.PORT || 8000

const server = express()

server.use('/home', homeRouter)

const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./src/Documentation/swagger.json');

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
// console.log(server.get)

// server.get('/', home.homePageRender)
// server.use('/', home.homePageQueryRenderer)
// server.get('/:id', home.homePageParamRenderer)
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
