const express = require('express');
const favicon = require('serve-favicon');
const os = require('os');
const compression = require('compression');
const path = require('path');
const bunyan = require('bunyan');
const db = require('../database');

const app = express();
const log = bunyan.createLogger({ name: 'production' });
const port = process.env.PORT || 3000;

console.log(path.join(__dirname, '..', 'csr.pem'));

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

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    try {
      log.info(`Listening at http://${os.networkInterfaces().lo0[0].address}:${port}`);
    } catch (e) {
      log.info(`listening at ${port}`);
    }
  }
});
