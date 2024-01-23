const fs = require('fs');

try {
    // Write the text to the file synchronously
    fs.writeFileSync('folderName/read.txt', "what's your name?");
    console.log('File created successfully and write some text');
} catch (error) {
    // Handle errors, if any
    console.log(error);
}
