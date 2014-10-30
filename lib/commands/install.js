var Search             = require ('./search')
    , MessagesEngine   = require ('./core/MessagesEngine')
    , StreamEngine     = require ('./core/StreamEngine')
    , InitConfigEngine = require ('./core/InitConfigEngine')
    , _                = require ('underscore');

function install (options, font) {
  if (font) {
    remoteInstall(font);
  } else {
    installFontsFromConfig();
  };

  if (options.save) {
    saveFontOnInitConfig(font);
  };
};

function installFontsFromConfig () {
  InitConfigEngine.read(function (error, data) {
    var configs = JSON.parse(data)
        , fonts = configs.fonts;

    if (fonts.length > 0) {
      _.each(fonts, function (font) {
        remoteInstall(font);
      });
    };
  });
};

function saveFontOnInitConfig (fontName) {
  InitConfigEngine.read(function (error, data) {
    var config  = JSON.parse(data)
        , fonts = config.fonts;

    if(!_.find(fonts, function (font) {
      return font == fontName;
    })) {
      fonts.push(fontName);

      InitConfigEngine.content = JSON.stringify(config, null, 2);
      InitConfigEngine.save();
    };
  });
};

function remoteInstall (font) {
  var search = new Search(font);

  search.on('response', function (response) {
    if (response.statusCode === 200) {
      MessagesEngine.display(('– ' + font + ' was found!').cyan);

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
              name: font.replace(' ', '-'),
              extension: 'css',
              content: buffer
            }, function (error) {
              if (error) throw error;

              MessagesEngine
                .display(('– ' + font + ' was installed successfully!').green);
            });
        });
      });
    } else {
      MessagesEngine
        .display((font + ' not found.').red);
    };
  });
};

module.exports = install;
