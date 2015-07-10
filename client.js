var net = require('net');
var PORT;
var last = process.argv.length - 1;
var HOST = process.argv[last].split('/')[0];
var uri = '/' + process.argv[last].split('/')[1];
console.log(HOST)
console.log('uri', uri)

var uri = process.argv[last].split('\n')[0].split('').splice(14).join('');

if (process.argv.length <= 2) {
  console.log('--help: node client.js [METHOD] [Request URI]\n[METHOD] no method set will return the body by default, -h for response header');
} else if (process.argv > 3) {
  for (var i = 2; i <= process.argv.length - 2; i++) {
    //request method to use
    if (process.argv[i] === '-h') {
      method = 'HEAD';
    } else if (process.argv[i] === '-p') {
      PORT = process.argv[i + 1];
    }
  }
} else {
  method = 'GET';
  PORT = 8080;
}

var client = new net.Socket();
client.connect(PORT, HOST, function() {
  console.log('connected to server');

  //send request header
  if (process.argv) {
    client.write(method + ' ' + uri + ' HTTP/1.1\nHost: www.localhost:8080\nConnection: Keep-Alive\nAccept: text/html, application/json\nDate: ' + new Date());
  }

  client.setEncoding('utf8');
  client.on('data', function(chunk) {
    console.log(chunk);
  });

});