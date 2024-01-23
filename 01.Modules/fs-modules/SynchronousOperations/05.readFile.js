const fs = require('fs')
try {
    const res=fs.readFileSync('read.txt','utf-8')
    console.log(res)
} catch (error) {
    console.error(error)
}