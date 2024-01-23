const fs = require('fs')

fs.writeFile('read.txt','what is fs module',(err)=>{
    if(err){
        console.error('Error',err)
        return
    }
    console.log('create file and some text add successfully...');
});