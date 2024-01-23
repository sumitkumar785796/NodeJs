const fs = require('node:fs')
const http = require('node:http')
const server = http.createServer((req,res)=>{
    // res.end('Calling API')
    fs.readFile(`${__dirname}/API/API.json`,'utf-8',(err,data)=>{
        if(err){
            console.log('Error',err)
            return
        }
        // console.log(data)
        const Objdata=JSON.parse(data)
        res.end(Objdata[0].title)
        // res.end(data)
    })
    
})
port=8000
host='localhost'
server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`)
})
