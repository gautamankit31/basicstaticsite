const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/') {
    if (method === 'GET') {
      fs.readFile('home.html', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
  } else if (url === '/style.css') {
    if (method === 'GET') {
      fs.readFile('style.css', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
  } else if (url === '/task.jpg') {
    if (method === 'GET') {
      fs.readFile('task.jpg', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.on('listening', () => {
  console.log('Server started...');
});

server.on('error', (err) => {
  console.log('unable to start server', err);
});

server.listen(3001);