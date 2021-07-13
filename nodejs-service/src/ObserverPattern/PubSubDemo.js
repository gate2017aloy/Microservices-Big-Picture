const EventEmitter = require('./Publisher');

const eventEmitter = new EventEmitter();

eventEmitter.on('ready', ()=>{
    console.log('I am ready')
})

eventEmitter.emit('ready')
