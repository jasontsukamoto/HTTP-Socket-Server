var net = require('net');
var PORT = 8080;

var client = new net.Socket();
client.connect(PORT, function() {
  console.log('connected to server')
  process.stdin.pipe(client);
  client.setEncoding('utf8');
  client.on('data', function(chunk) {
    console.log(chunk);
  })

});