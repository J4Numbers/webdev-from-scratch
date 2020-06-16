const path = require('path');
const nunjucks = require('nunjucks');

const renderer = new nunjucks.Environment([
  new nunjucks.FileSystemLoader(path.join(process.cwd(), 'src/views')),
], {});

const simpleReturn = (req, res, next) => {
  console.log(`${req.getPath()} was called`);
  res.contentType = 'text/html';
  res.send(200, renderer.render('pages/homepage.njk', {}));
  next();
};

module.exports = (server) => {
  server.get('/', simpleReturn);
  return server;
};
