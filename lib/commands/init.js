var StreamEngine     = require ('./core/StreamEngine')
    , MessagesEngine = require ('./core/MessagesEngine');

var init = {
  execute: function (options) {
    MessagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan);

    StreamEngine.open(StreamEngine.getInitConfigFilePath, function (error, data) {
      if (error) throw error;

      if (!StreamEngine.fileExists(StreamEngine.getUserInitConfigFileName) || options.force) {

        var content = JSON.parse(data);
        if (options.dir) {
          content.directory = options.dir;
        }

        StreamEngine.save({
          content: JSON.stringify(content, null, 2),
          fileName: StreamEngine.getUserInitConfigFileName
        }, function (error) {
          if (error) throw error;

          MessagesEngine
            .display('Done!');
        });
      } else {
        MessagesEngine
            .display('typers.json already exists!'.red);
      }
    });
  }
};

module.exports = init;
