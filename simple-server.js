const net = require('net');
const server = net.createServer(function (stream) {
	stream.pipe(process.stdout)
});

server.listen(5000);
