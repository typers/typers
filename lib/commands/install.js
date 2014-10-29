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
      MessagesEngine.display('– Your font was found!'.cyan);

      this.on('data', function (buffer) {
        InitConfigEngine.read(function (error, data) {
          if (error) {
            MessagesEngine
              .displayError
                (
                  'Typers couldn\'t find "typers.json" in this folder.\n'.red +
                  '(Do you think you are in the right folder?)'.gray
                  , 'More details: '.gray + error
                );
          };

          var config = JSON.parse(data);

          StreamEngine
            .saveFont({
              dest: config.directory,
              name: font,
              extension: 'css',
              content: buffer
            }, function (error) {
              if (error) throw error;

              MessagesEngine.display('– Your font was installed successfully!'.green);
            });
        });
      });
    } else {
      MessagesEngine
        .display('Font not found.'.red);
    };
  });
};

module.exports = install;
