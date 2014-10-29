var StreamEngine   = require ('./core/StreamEngine')
    , streamEngine = new StreamEngine;

var init = {
  'typersSettings':{
    'repositorie': '../myfonts',
    'required': {

    }
  },
  exec: function () {
    console.log('- Initializing project\' settings...'.cyan);

    streamEngine.save('typers.json', '', function (error) {
      if (error) throw error;

      console.log('Done!');
    });
  }
};

module.exports = init;
