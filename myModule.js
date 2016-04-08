var fs = require('fs');
var path = require('path');

var filterfunction  = function(directory,fileExt,callback){

	fs.readdir(directory,function(err,list){
		
		if(err) 
			return callback(err);
		
		list = list.filter(function(file){
			return (path.extname(file)=="." + fileExt);
		});
		callback(null,list);
	});		
};

module.exports = filterfunction;