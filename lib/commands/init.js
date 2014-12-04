var StreamEngine     = require ('./core/StreamEngine')
    , MessagesEngine = require ('./core/MessagesEngine');

var init = {
  execute: function (options) {
    MessagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan);

    StreamEngine.open(StreamEngine.getInitConfigFilePath, function (error, data) {
      if (error) throw error;

      var configs = {};
      configs.content = JSON.parse(data);

      if (options.dir) {
        configs.directory = options.dir;
      }

      StreamEngine.save({
        folder: configs.directory,
        content: JSON.stringify(configs.content, null, 2),
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
