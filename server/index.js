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

const privateKey = fs.readFileSync(path.join(__dirname, '..', 'public', '.well-known', 'pki-validation', '2913FC765B13BB952E4F49D22EF1F5BD.txt'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, '..', 'www_carlitoswillis_com.crt'), 'utf8');
console.log(privateKey);

const credentials = { key: privateKey, cert: certificate };
const app = express();

// console.log('line, 18', path.join(__dirname, '..'));
// your express configuration here

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);

// const log = bunyan.createLogger({ name: 'production' });
// const port = process.env.PORT || 3000;

httpServer.get('*', (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// app.listen(port, (err) => {
//   if (err) {
//     throw err;
//   } else {
//     try {
//       log.info(`Listening at http://${os.networkInterfaces().lo0[0].address}:${port}`);
//     } catch (e) {
//       log.info(`listening at ${port}`);
//     }
//   }
// });

// httpServer.listen(8080);
// httpsServer.listen(8443);
