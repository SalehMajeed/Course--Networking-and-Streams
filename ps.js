const spawn = require('child_process').spawn;
const ps = spawn('grep', ['Potato']);

ps.stdout.pipe(process.stdout);
ps.stdin.write('Cheese\n');
ps.stdin.write('Carrots\n');
ps.stdin.write('Carrot Potatoes\n');
ps.stdin.write('Potato!\n');
ps.stdin.end();
