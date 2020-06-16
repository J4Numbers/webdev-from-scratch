const config = require('config');
const restify = require('restify');

const package = require('../package');

const server = restify.createServer({
  name: config.get('app.name'),
  url: config.get('app.hostname'),
  version: package.version,
  ignoreTrailingSlash: true,
});

server.get('/', (req, res, next) => {
  console.log(`${req.getPath()} was called`);
  res.contentType = 'text/plain';
  res.send(200, 'Hello world');
  next();
});

server.listen(config.get('app.port'), () => {
  console.log(`${server.name} has started at location ${server.url}`);
});

module.exports = server;
