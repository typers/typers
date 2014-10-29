var request            = require ('request')
    , MessagesEngine   = require ('./MessagesEngine')
    , REGISTRYENDPOINT = 'http://fonts.googleapis.com/css?family=';

var SearchEngine = {
  _setFontName: function (font) {
    this.font = font;
  },
  getFontName: function () {
    return this.font;
  },
  query: function (font) {
    this._setFontName(font);
    return this;
  },
  localize: function () {
    MessagesEngine
      .display('Searching for ' + this.getFontName().yellow + '. Please, wait...');

    return this._communicate(this.getFontName());
  },
  _communicate: function (font) {
    var options = {
          url: REGISTRYENDPOINT + font,
          headers: {
            'content-type': 'text/css',
            'user-agent':
              'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36'
          }
        };

    return request(options);
  }
};

module.exports = SearchEngine;
