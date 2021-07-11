const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())

const server = require('http').createServer(app);
const port = 4000

const {Server} = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => res.send('Hello World!'))

io.on('connection', (socket) => {
    // either with send()
    console.log(`${socket.id} got connected`)
    socket.send(`Hello! ${socket.id}, we are connected`);

    // or with emit() and custom event names
    // io.emit("greetings", `Hi All, ${socket.id} has joined us`);
    socket.broadcast.emit("greetings", `Hi All, ${socket.id} has joined us`);
    // handle the event sent with socket.send()
    // socket.on("message", (data) => {
    //     console.log(data);
    // });

    // handle the event sent with socket.emit()
    // socket.on("salutations", (elem1, elem2, elem3) => {
    //     console.log(elem1, elem2, elem3);
    //     io.emit("message", "Hi from!", {"ms": socket.id}, Buffer.from([4, 3, 3, 1]));
    // });



    socket.on("disconnect", () => {
        io.send(`${socket.id} is disconnected`)
        console.log(`${socket.id} is disconnected`); // undefined
    });
});

server.listen(port, () => {
    const currentdate = new Date();
    const datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    console.log(`Lisening on port :${port}, started on ${datetime}`)
})
