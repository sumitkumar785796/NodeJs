const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('hello world')
})
port=8000;
// host='127.0.0.1'
host='localhost'
server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`)
})