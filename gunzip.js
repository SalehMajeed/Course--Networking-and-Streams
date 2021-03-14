const create_gunzip = require('zlib').createGunzip;
const create_hash = require('crypto').createHash;

process.stdin
	.pipe(create_gunzip())
	.pipe(create_hash('sha512', { encoding: 'hex' }))
	.pipe(process.stdout);
