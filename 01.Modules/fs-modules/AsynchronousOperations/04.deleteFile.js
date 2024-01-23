const fs = require('fs')
fs.unlink('read.txt',(err)=>{
    if(err){
        console.error('error',err)
        return
    }
    console.log('Delete Successfully...')
})
