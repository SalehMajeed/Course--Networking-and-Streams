const fs = require('fs');
const through = require('through2');
const transform = require('readable-stream').Transform;
const concat = require('concat-stream');
const http = require('http');
const qs = require('querystring');

const server = http.createServer(function (req, res) {
	req.pipe(counter()).pipe(concat({ encoding: 'string' }, onbody));

	function counter() {
		let size = 0;
		return through(function (buf, enc, next) {
			size += buf.length;
			if (size > 20) {
				res.end('Boom!\n');
			} else {
				next(null, buf);
			}
		});
	}

	function onbody(body) {
		const params = qs.parse(body);
		console.log(params);
		res.end('ok\n');
	}
});
server.listen(5000);

fs.createReadStream(process.argv[2]).pipe(through(toUpper)).pipe(process.stdout);
fs.createReadStream(process.argv[2])
	.pipe(
		new transform({
			transform: toUpper,
		})
	)
	.pipe(process.stdout);

function toUpper(buf, enc, next) {
	next(null, buf.toString().toUpperCase());
}
