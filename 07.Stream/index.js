const fs = require('fs')
const http = require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    // fs.readFile('file.txt','utf-8',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //         return
    //     }
    //     res.end(data)
    // })
    const rstream = fs.createReadStream('file.txt')
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata)
    })
    rstream.on('end',()=>{
        res.end()
    })
    rstream.on('error',(error)=>{
        console.log(error)
        res.end('file is not found')
    })
})
port=8000
host='localhost'
server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`)
})