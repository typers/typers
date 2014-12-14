var SearchEngine      = require ('./core/SearchEngine')
    , MessagesEngine  = require ('./core/MessagesEngine')
    , prepareFontName = require ('../utils/prepareFontName');

var search = {
  find: function (font) {
    return SearchEngine
      .query(font)
      .localize()
      .on('response', function (response) {
        if (response.statusCode === 200) {
          MessagesEngine.display(('– ' + prepareFontName(font) + ' was found!').cyan);
        } else {
          MessagesEngine
            .display((prepareFontName(font) + ' not found.').red);
        };
      });
  }
};


module.exports = search;
