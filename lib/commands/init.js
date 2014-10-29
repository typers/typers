var StreamEngine     = require ('./core/StreamEngine')
    , MessagesEngine = require ('./core/MessagesEngine');

var init = {
  execute: function () {
    MessagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan);

    StreamEngine.open(StreamEngine.getInitConfigFilePath, function (error, data) {
      if (error) throw error;

      StreamEngine.save('typers.json', data, function (error) {
        if (error) throw error;

        MessagesEngine
          .display('Done!');
      });
    });
  }
};

module.exports = init;
