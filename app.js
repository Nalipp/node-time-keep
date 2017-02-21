const fs = require('fs');
const http = require('http');

let server = http.createServer(function(req, res) {
  if (req.url === '/') {
    serveIndex(res);
  } else if (req.url === '/favicon.ico') {
    serveFavicon(res);
  } else if (req.url === '/js/script.js') {
    serveJavaScript(res);
  } else if (req.url === '/css/style.css') {
    serveCSS(res);
  } else {
    pageNotFound(res);
  }
});

function serveIndex(res) {
  fs.readFile('static/index.html', (err, data) => {
    if (err) console.log("couldn't read javaScript file");       
    res.end(data);
  });
}

function serveFavicon(res) {
  fs.readFile('static/favicon.ico', (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
}

function serveJavaScript(res) {
  fs.readFile('static/js/script.js', (err, data) => {
    if (err) console.log("couldn't read javaScript file");
    res.end(data);
  });
}

function serveCSS(res) {
  fs.readFile('static/css/style.css', (err, data) => {
    if (err) console.log("couldn't read CSS file");
    res.end(data);
  });
}

function pageNotFound(res) {
  res.statusCode = 404;
  res.end("Opps there's nothing here");
}


server.listen(3000, () => console.log('running on 3000'));

