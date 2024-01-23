const fs = require('fs')
try {
    fs.renameSync('read.txt','newData.txt')
    console.log('Rename file is sucessfully')
} catch (error) {
    console.error(error);
}