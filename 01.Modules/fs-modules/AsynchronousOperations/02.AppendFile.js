const fs = require('fs')
fs.appendFile('read.txt','\nIn Node.js, the fs module provides file system-related functionality, and it supports both synchronous and asynchronous methods',(err)=>{
    if(err){
        console.error('Error',err);
    }
    console.log('Add some text successfully...')
})