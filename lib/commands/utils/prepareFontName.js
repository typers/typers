var capitalizeWords = require ('./capitalizeWords');

function prepareFontName (font) {
  return capitalizeWords(font.replace('-',' '));
};

module.exports = prepareFontName;
