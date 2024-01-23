const fs = require('fs')
try {
    fs.appendFileSync('read.txt','\nMy name is sumit')
    console.log('Add some text')
} catch (error) {
    console.log(error)   
}