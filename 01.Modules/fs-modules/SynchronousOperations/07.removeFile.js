const fs = require('fs')
try {
    fs.unlinkSync('folderName/read.txt')
    console.log('Remove file successfully...')
} catch (error) {
    console.error(error)
}