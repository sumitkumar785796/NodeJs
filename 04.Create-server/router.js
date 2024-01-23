const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('This is main page')
    }else if(req.url==='/about'){
        res.end('This is aboutUs page')
    }else if(req.url==='/contact'){
        res.end('This is contactUs page')
    }else{
        res.writeHead(404,{"Context-type":"text/html"})
        res.end('<h1>404 page is not found!!!</h1>')
    }
})
host='localhost'
port=8000
server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}`)
})