var StreamEngine     = require ('./core/StreamEngine')
    MessagesEngine   = require ('./core/MessagesEngine')
    , streamEngine   = new StreamEngine
    , messagesEngine = new MessagesEngine
    , INITCONFIGFILE = __dirname + '/../initConfig.json';

var init = {
  execute: function () {
    messagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan);

    streamEngine.open(INITCONFIGFILE, function (error, data) {
      if (error) throw error;

      streamEngine.save(data, 'typers.json', function (error) {
        if (error) throw error;

        messagesEngine
          .display('Done!');
      });
    });
  }
};

module.exports = init;
