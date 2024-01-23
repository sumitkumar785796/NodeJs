const fs = require('fs')
try {
    fs.mkdirSync('folderName')
    console.log('Create folder successfully')
} catch (error) {
    console.error(error);
}