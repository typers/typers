var SearchEngine = require ('./core/SearchEngine');

function search (fonts) {
  return SearchEngine
    .query(fonts)
    .localize();
};

module.exports = search;
