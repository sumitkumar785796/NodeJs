const fs = require('fs')
try {
    const buf_data=fs.readFileSync('read.txt')
    console.log(buf_data)//<Buffer 77 68 61 74 27 73 20 79 6f 75 72 20 6e 61 6d 65 3f 0a 4d 79 20 6e 61 6d 65 20 69 73 20 73 75 6d 69 74> simply display the buffer data
    orignal_data=buf_data.toString();
    console.log(orignal_data)
} catch (error) {
    console.error(error);
}