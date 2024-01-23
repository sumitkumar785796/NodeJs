const EventEmitter = require('events')
const event = new EventEmitter()
event.on('sayMyName',()=>{
    console.log('My name is sumit kumar.')
})
event.on('sayMyName',()=>{
    console.log('My name is suraj kumar.')
})
event.on('sayMyName',()=>{
    console.log('My name is saurav kumar.')
})
event.emit('sayMyName')
event.on('checkpage',(sc,msg)=>{
    console.log(`state code is ${sc} and the page is ${msg}`)
})
event.emit('checkpage',200,'ok');