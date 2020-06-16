describe('The application on HTTP', () => {
  describe('Basic page', () => {
    it('Should resolve the page with a 200 OK', () => {
      return request(require('../../../src/app'))
        .get('/')
        .then((resolved) => {
          expect(resolved).to.have.status(200);
        });
    });
  });

  describe('Basic error', () => {
    it('Should return a 404 NOT FOUND on a page which does not exist', () => {
      return request(require('../../../src/app'))
        .get('/page-which-will-never-exist')
        .then((resolved) => {
          expect(resolved).to.have.status(404);
        });
    });
  });
});
