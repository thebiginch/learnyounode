var argv = process.argv;
var total=0;

for(var i=2;i<argv.length;i++) 
	total += Number(argv[i]);

console.log(total);
