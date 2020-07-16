const express = require('express');
const favicon = require('serve-favicon');
const os = require('os');
const compression = require('compression');
const path = require('path');
const bunyan = require('bunyan');
const fs = require('fs');
const http = require('http');
const https = require('https');
const db = require('../database');

const privateKey = fs.readFileSync(path.join(__dirname, '..', 'private.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, '..', 'www_carlitoswillis_com.crt'), 'utf8');
const credentials = { key: privateKey, cert: certificate };
const log = bunyan.createLogger({ name: 'production' });

const app = express();
const httpApp = express();
const httpServer = http.createServer(httpApp);
const httpsServer = https.createServer(credentials, app);

httpApp.get('*', (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});

httpServer.listen(80);
httpsServer.listen(443);

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.json());
app.use(express.static('public'));

app.route('/blogs')
  .post((req, res) => {
    res.end('you are not authorized');
  })
  .get((req, res) => {
    db.readAllBlogs(req.query, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  })
  .put((req, res) => {
    res.end('you are not authorized');
  })
  .delete((req, res) => {
    res.end('you are not authorized');
  });
app.get('/carlitos-willis-resume', (req, res)=> {
  res.sendFile(path.join(__dirname, '..', 'public', 'carlitos-willis-resume.pdf'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
