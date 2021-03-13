const fs = require('fs');
const w = fs.createWriteStream('cool.txt');

w.on('finish', function () {
	console.log('finished');
});
w.write('Hi\n');
w.write('Wow\n');
w.end();
