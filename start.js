var http = require('http'),
	path = require('path'),
	express = require('express');

var router = express(),
	server = http.createServer(router),
	server_port_number = '81';

router.use('/', express.static(path.resolve(__dirname, 'staticFiles')));

server.listen(server_port_number, process.env.IP || '0.0.0.0', function() {
	process.stdout.write('Development and Preview server running at localhost:' + server_port_number + '.' + '\n');
	server.address();
});
