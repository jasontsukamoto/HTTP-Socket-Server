var net = require('net');
var PORT = 8080;

var client = new net.Socket();
client.connect(PORT, function() {
  var last = process.argv.length - 1;
  var uri = process.argv[last].split('\n')[0].split('').splice(14).join('');
  var options;

  for (var i = 2; i <= process.argv.length - 2; i++) {
    options = process.argv[i];
  }

  // console.log('options',process.argv)
  // console.log('last',last)

  if (options === '-h') {
    method = 'HEAD';
  } else if (options === '-b') {
    method = 'GET';
  } else {
    method = 'GET';
  }
  // console.log('methoid', method)
//   var idk = method + ' ' + uri + ' HTTP/1.1\nHost: www.localhost:8080\nConnection: Keep-Alive\nAccept: text/html, application/json\nDate: ' + new Date();
// console.log(idk)
  console.log('connected to server');

  if (process.argv) {
    client.write(method + ' ' + uri + ' HTTP/1.1\nHost: www.localhost:8080\nConnection: Keep-Alive\nAccept: text/html, application/json\nDate: ' + new Date());
  }

  client.setEncoding('utf8');
  client.on('data', function(chunk) {
    console.log(chunk);
  })

});