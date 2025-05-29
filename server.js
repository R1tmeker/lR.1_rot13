const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const errorDir = path.join(__dirname, '404');

function serveFile(res, filePath, contentType, statusCode = 200) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Ошибка сервера');
    } else {
      res.writeHead(statusCode, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    serveFile(res, path.join(publicDir, 'index.html'), 'text/html; charset=utf-8');
  } else if (req.url === '/style.css') {
    serveFile(res, path.join(publicDir, 'style.css'), 'text/css; charset=utf-8');
  } else if (req.url === '/script.js') {
    serveFile(res, path.join(publicDir, 'script.js'), 'application/javascript; charset=utf-8');
  } else if (req.url === '/404.css') {
    serveFile(res, path.join(errorDir, '404.css'), 'text/css; charset=utf-8');
  } else if (req.url === '/404-cat.png') {
    serveFile(res, path.join(errorDir, '404-cat.png'), 'image/png');
  } else {
    serveFile(res, path.join(errorDir, '404.html'), 'text/html; charset=utf-8', 404);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});