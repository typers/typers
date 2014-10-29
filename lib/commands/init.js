var StreamEngine     = require ('./core/StreamEngine')
    MessagesEngine   = require ('./core/MessagesEngine')
    , streamEngine   = new StreamEngine
    , messagesEngine = new MessagesEngine;

var init = {
  'typersSettings':{
    'repositorie': '../myfonts',
    'required': {

    }
  },
  exec: function () {
    messagesEngine
      .display('- Initializing Typers settings in your root folder...'.cyan)

    streamEngine.save('hello', 'typers.json', function (error) {
      if (error) throw error;

      messagesEngine
        .display('Done!');
    });
  }
};

module.exports = init;
