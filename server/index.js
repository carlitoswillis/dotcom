const express = require('express');
const os = require('os');
const compression = require('compression');
const path = require('path');
const bunyan = require('bunyan');
const db = require('../database');

const app = express();
const log = bunyan.createLogger({ name: 'production' });
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.static('public'));

app.route('/blogs')
  .post((req, res) => {
  })
  .get((req, res) => {
    db.readAllBlogs((err, results) => {
      if (err) throw err;
      res.send(results);
    });
  })
  .put((req, res) => {
  })
  .delete((req, res) => {
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    log.info(`Listening at http://${os.networkInterfaces().lo0[0].address}:${port}`);
  }
});
