var StreamEngine     = require ('./core/StreamEngine')
    , MessagesEngine = require ('./core/MessagesEngine');

var init = {
  execute: function (options) {
    MessagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan);

    StreamEngine.open(StreamEngine.getInitConfigFilePath, function (error, data) {
      if (error) throw error;

      StreamEngine.save({
        folder: options.dir,
        content: JSON.stringify(JSON.parse(data), null, 2),
        fileName: StreamEngine.getUserInitConfigFileName
      }, function (error) {
        if (error) throw error;

        MessagesEngine
          .display('Done!');
      });
    });
  }
};

module.exports = init;
