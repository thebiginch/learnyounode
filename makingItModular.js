var myModule = require('./myModule');

myModule(process.argv[2],process.argv[3],function(err,list){

	if(err) console.log("error")
	else{
		list.forEach(function(file){console.log(file);});
	}

});


