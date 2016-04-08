var fs = require('fs');
var filePath = process.argv[2];
var buffer = fs.readFileSync(filePath);
var numNewLines = buffer.toString().split('\n').length - 1;
console.log(numNewLines);