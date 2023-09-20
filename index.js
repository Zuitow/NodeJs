var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
var Dataatual = new Date();
var Dataportu = Dataatual.toLocaleDateString('pt-BR');

  res.end( 'Paulo Cesar Celestino '+ Dataportu +" "+Dataatual);
}).listen(8005);
