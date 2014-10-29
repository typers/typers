var StreamEngine   = require ('./StreamEngine');

var InitConfigEngine = {
  read: function (callback) {
    StreamEngine.open(StreamEngine.getUserInitConfigFilePath(), callback);
  }
};

module.exports = InitConfigEngine;
