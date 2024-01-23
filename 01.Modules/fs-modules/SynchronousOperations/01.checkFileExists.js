const fs = require('fs');
try {
  const exists = fs.existsSync('read.txt');
  console.log('File exists:', exists);
} catch (err) {
  console.error('Error checking file existence:', err);
}
