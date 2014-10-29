var request            = require ('request')
    , prepareFontName  = require ('../utils/prepareFontName.js')
    , messagesEngine   = require ('./MessagesEngine')
    , REGISTRYENDPOINT = 'http://fonts.googleapis.com/css?family=';

function SearchEngine () {
  this.query = function (font) {
    this._setFontName(font);
    return this;
  };

  this.localize = function () {
    this.emitSearchingMessage();

    return this._communicate(this.getFontName());
  };

  this._communicate = function (font) {
    var options = {
          url: REGISTRYENDPOINT + font,
          headers: {
            'content-type': 'text/css',
            'user-agent':
              'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36'
          }
        };

    return request(options);
  };

  this.emitSearchingMessage = function () {
    console.log
      ('Searching for ' + this.getFontName().yellow + '. Please, wait...');
  };
};

SearchEngine.prototype = {
  _setFontName: function (font) {
    this.font = prepareFontName(font);
  },
  getFontName: function () {
    return this.font;
  }
};

module.exports = SearchEngine;
