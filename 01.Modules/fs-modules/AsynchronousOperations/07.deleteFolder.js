const fs = require('fs')
fs.rmdir('folderName',(err)=>{
    if(err){
        console.error('Error',err)
    }
    console.log('Delete Folder Successfully...')
})