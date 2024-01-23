const fs = require('fs')
fs.rename('read.txt','newRead.txt',(err)=>{
    if(err){
        console.error('Error',err)
    }
    console.log('Rename file successfully...')
})