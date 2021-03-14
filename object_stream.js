const through = require('through2');
let size = 0;

process.stdin.pipe(through.obj(write1)).pipe(through(write2, end));

function write1(buf, enc, next) {
	next(null, buf.toString());
}

function write2(obj, enc, next) {
	size += obj.length;
	next();
}

function end() {
	console.log('size =', size);
}
