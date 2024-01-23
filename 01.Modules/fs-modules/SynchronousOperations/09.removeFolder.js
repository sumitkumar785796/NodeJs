const fs = require('fs')
try {
    fs.rmdirSync('FolderName');
    console.log('Folder delete successfully!!!')
} catch (error) {
    console.error(error);
}
