var fs = require('fs');
var filePath = process.argv[2];

var callback = function(err,contents){ 
	console.log(contents.toString().split('\n').length - 1);
};

fs.readFile(filePath,callback);

