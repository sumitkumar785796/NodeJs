const fs = require('fs')
const http = require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream('file.txt')
    rstream.pipe(res)
})
port=9000
host='localhost'
server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`)
})