var Search           = require ('./search')
    , MessagesEngine = require ('./core/MessagesEngine')
    , StreamEngine   = require ('./core/StreamEngine');

function install (options, fonts) {
  if (options.remote) {
    remoteInstall(fonts);
  };
};

function remoteInstall (fonts) {
  var search = new Search(fonts);

  MessagesEngine
    .display('(The final content will be served remotely.)'.gray);

  search.on('response', function (response) {
    if (response.statusCode === 200) {
      this.on('data', function (data) {
        StreamEngine
          .save('test.js', data, function (error) {
            if (error) throw error;

            MessagesEngine.display('Your font was installed successfully!'.green);
          });
      });
    } else {
      MessagesEngine
        .display('Font not found.'.red);
    };
  });
};

module.exports = install;
