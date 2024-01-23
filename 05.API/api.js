const fs = require('node:fs')
const http = require('node:http')
const server = http.createServer((req,res)=>{
    // res.end('Calling API')
    const data = fs.readFileSync(`${__dirname}/API/API.json`,'utf-8')
    console.log(data)
    const Objdata=JSON.parse(data)
    res.end(Objdata[0].title)    
})
port=8000
host='localhost'
server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`)
})
