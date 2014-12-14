var search    = require ('../lib/commands/search')
    , expect  = require ('expect.js');

describe('A search', function () {
  it('should find something', function (done) {
    search.find('lato').on('data', function (response) {
      expect(response).to.be.an('object');
      done();
    });
  });
});
