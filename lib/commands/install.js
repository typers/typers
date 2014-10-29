var Search             = require ('./search')
    , MessagesEngine   = require ('./core/MessagesEngine')
    , StreamEngine     = require ('./core/StreamEngine')
    , InitConfigEngine = require ('./core/InitConfigEngine');

function install (options, font) {
  if (options.local) {
    // TODO
    return;
  };

  remoteInstall(font);
};

function remoteInstall (font) {
  var search = new Search(font);

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
