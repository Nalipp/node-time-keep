const fs = require('fs');
const http = require('http');

let server = http.createServer(function(req, res) {
  res.end('hi')
});

server.listen(3000, () => console.log('running on 3000'));


