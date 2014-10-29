var colors         = require ('colors')
    , SearchEngine = require ('./core/SearchEngine');

function search (fonts) {
  return new SearchEngine()
    .query(fonts)
    .localize();
};

module.exports = search;
