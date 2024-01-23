const path = require('path')
console.log("check directory:",path.dirname('D:/webDevs/NodeJs/Modules/path-modules/index.js'));
console.log("check extension:",path.extname('D:/webDevs/NodeJs/Modules/path-modules/index.js'));
console.log("check filename:",path.basename('D:/webDevs/NodeJs/Modules/path-modules/index.js'));
console.log("view the object type file:",path.parse('D:/webDevs/NodeJs/Modules/path-modules/index.js'));
const mypath=path.parse('D:/webDevs/NodeJs/Modules/path-modules/index.js')
console.log(mypath.root)
console.log(mypath.dir)
console.log(mypath.base)
console.log(mypath.ext)
console.log(mypath.name)