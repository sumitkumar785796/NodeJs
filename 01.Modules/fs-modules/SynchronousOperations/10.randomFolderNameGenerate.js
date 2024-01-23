const fs = require('fs');

function generateRandomFileName() {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileName = `${timestamp}_${randomString}`;
    return fileName;
}

const randomFileName = generateRandomFileName();

try {
    fs.mkdirSync(randomFileName);
    console.log('Create Folder Successfully...');
} catch (error) {
    console.error(error);
}