const create_hash = require('crypto').createHash;

process.stdin.pipe(create_hash('sha512', { encoding: 'hex' })).pipe(process.stdout);
