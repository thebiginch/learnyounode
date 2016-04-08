var fs = require('fs');
var path = require('path');

var filepath = process.argv[2];
var fileExt="." + process.argv[3];

var callback = function(err,list){
	list.forEach(function(file){
		if (path.extname(file)==fileExt)
			console.log(file);
	});
}


fs.readdir(filepath,callback);
