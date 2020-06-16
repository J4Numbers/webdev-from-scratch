const simpleReturn = (req, res, next) => {
  console.log(`${req.getPath()} was called`);
  res.contentType = 'text/plain';
  res.send(200, 'Hello world');
  next();
};

module.exports = (server) => {
  server.get('/', simpleReturn);
  return server;
};
