//module wrapper function
//(function (exports, require, module, __filename, __dirname) {
//})();
//require is also a private module member which passed as an argument to each module while node wrap that into function
const pathapi = require('./pathApi');

//core module
//file or folder in thh given path
//node_module

const osapi = require('./osModule');
const fsapi = require('./fileModule');


console.log(__filename);
console.log(__dirname);

console.log("hello");
global.console.log("hello world");

var a = 10;
console.log(a);

console.log(global.a); // single file treated as module and existing variables or functions are part of that file scope only.

//function to get path api information
//pathapi.getPathApiInfo();

//function to get os api information
//osapi.getOSAPIInfo();

//function to get file system api info
fsapi.getFSAPIInfo();


