const fs = require('fs')
fs.mkdir('folderName',(err)=>{
    if(err){
        console.error('Error',err)
        return
    }
    console.log('Create Folder Successfully...')
})