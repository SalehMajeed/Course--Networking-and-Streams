const http = require('http');
const ecstatic = require('ecstatic');
const wsock = require('websocket-stream');
const through = require('through2');

const server = http.createServer(ecstatic(__dirname + '/public'));
server.listen(5000);

wsock.createServer({ server: server }, function (stream) {
	stream.pipe(loud()).pipe(stream);
});

function loud() {
	return through(function (buf, enc, next) {
		next(null, buf.toString().toUpperCase());
	});
}
