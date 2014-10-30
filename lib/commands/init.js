var StreamEngine     = require ('./core/StreamEngine')
    , MessagesEngine = require ('./core/MessagesEngine');

var init = {
  execute: function (options) {
    MessagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan);

    StreamEngine.open(StreamEngine.getInitConfigFilePath, function (error, data) {
      if (error) throw error;

      var configs = JSON.parse(data);

      if (options.dir) {
        configs.directory = options.dir;
      };

      StreamEngine.save
        (StreamEngine.getUserInitConfigFileName, JSON.stringify(configs, null, 2), function (error) {
          if (error) throw error;

          MessagesEngine
            .display('Done!');
          });
    });
  }
};

module.exports = init;
