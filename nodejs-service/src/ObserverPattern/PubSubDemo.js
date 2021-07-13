const EventEmitter = require('./Publisher');

const ActEventEmitter = require('events');


const eventEmitter = new EventEmitter();

eventEmitter.on('ready', ()=>{
    console.log('I am ready')
})

eventEmitter.on('ready', ()=>{
    console.log('I am ready++')
})

eventEmitter.emit('ready')
