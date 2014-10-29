var Search           = require ('./search')
    , MessagesEngine = require ('./core/MessagesEngine')
    , StreamEngine   = require ('./core/StreamEngine')
    , messagesEngine = new MessagesEngine
    , streamEngine   = new StreamEngine;

function install (options, fonts) {
  var messagesEngine = new MessagesEngine;

  if (options.remote) {
    remoteInstall(fonts);
  };
};

function remoteInstall (fonts) {
  var search = new Search(fonts);

  messagesEngine
    .display('(The final content will be served remotely.)'.gray);

  if (search.length > 1) {
    return;
  };

  search.on('response', function (response) {
    if (response.statusCode === 200) {
      this.on('data', function (data) {
        streamEngine
          .save(data, '/', function (error) {
            if (error) throw error;

            messagesEngine.display('Your font was installed successfully!'.green);
          });
      });

      return;
    } else {
      messagesEngine
        .display('Font not found.'.red);
    };
  });
};

module.exports = install;
