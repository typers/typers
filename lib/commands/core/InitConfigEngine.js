var StreamEngine = require ('./StreamEngine');

var InitConfigEngine = {
  read: function (callback) {
    StreamEngine.open(StreamEngine.getUserInitConfigFilePath(), callback);
  },
  save: function () {
    StreamEngine.save({fileName: StreamEngine.getUserInitConfigFilePath(), content: this.content});
  }
};

module.exports = InitConfigEngine;
