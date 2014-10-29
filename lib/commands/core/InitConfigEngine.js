var StreamEngine   = require ('./StreamEngine');

var InitConfigEngine = {
  open: function () {
    StreamEngine.open(StreamEngine.getInitConfigFilePath, function () {
      console.log('hello!');
    });
  }
};

module.exports = InitConfigEngine;
