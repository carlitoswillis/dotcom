const https = require('https');
const fs = require('fs');
const path = require('path');

const privateKey = fs.readFileSync(path.join(__dirname, '..', 'public', '.well-known', 'pki-validation', '2913FC765B13BB952E4F49D22EF1F5BD.txt'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, '..', 'csr.pem'), 'utf8');

const options = {
  key: privateKey,
  cert: certificate,
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(443);
