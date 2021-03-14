const split = require('split2');
const through = require('through2');

let line_count = 0;

process.stdin.pipe(split()).pipe(through(write, end));

function write(buf, enc, next) {
	line_count++;
	next();
}

function end(next) {
	console.log(line_count);
	next();
}
