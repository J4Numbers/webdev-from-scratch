const config = require('config');
const restify = require('restify');

const package = require('../package');

const routingEngine = require('./middleware/routes');

const server = restify.createServer({
  name: config.get('app.name'),
  url: config.get('app.hostname'),
  version: package.version,
  ignoreTrailingSlash: true,
  formatters: {
    'text/html': (req, res, body) => {
      return body;
    },
  },
});

routingEngine(server);

server.listen(config.get('app.port'), () => {
  console.log(`${server.name} has started at location ${server.url}`);
});

module.exports = server;
