var search             = require ('./search')
    , MessagesEngine   = require ('./core/MessagesEngine')
    , StreamEngine     = require ('./core/StreamEngine')
    , InitConfigEngine = require ('./core/InitConfigEngine')
    , _                = require ('underscore')
    , CleanCSS         = require ('clean-css')
    , prepareFontName  = require ('../utils/prepareFontName');

function install (options, fonts) {
  this.options = options;
  this.fonts = fonts;

  if (!StreamEngine.fileExists(StreamEngine.getUserInitConfigFilePath())) {
    MessagesEngine
      .display
        (
          'Typers couldn\'t find "typers.json" in this folder.\n'.red +
          'Hint: You would to use `typers init` to create it.\n'.gray +
          'Info: Even without typers.json, your font will be downloaded.'.green
        );
  };

  if (fonts.length > 0) {
    fonts.forEach(function (font, index) {
      font = prepareFontName(font);
      fonts[index] = font;
      remoteInstall(font);
    });
  } else {
    installFontsFromConfig();
  };
};

function installFontsFromConfig () {
  InitConfigEngine.read(function (error, data) {
    _.each(JSON.parse(data).fonts, remoteInstall);
  });
};

function saveFontsOnInitConfig (fontsToSave) {
  InitConfigEngine.read(function (error, data) {
    var config  = JSON.parse(data)
        , fonts = config.fonts;

    config.fonts = _.union(fonts, fontsToSave)

    InitConfigEngine.content = JSON.stringify(config, null, 2);
    InitConfigEngine.save();
  });
};

function remoteInstall (font) {
  var buffer = '';

  search.find(font).on('data', function (data) {
    buffer += data;
  }).on('end', function() {
    if (buffer.toString().substring(0, 2) === '/*') {
      InitConfigEngine.read(function (error, data) {
        var config = {};

        if (data) {
          config = JSON.parse(data);
        } else {
          config.directory = '/';
        };

        if (this.options.minify) {
          buffer = new CleanCSS().minify(buffer);
        };

        if (this.options.save) {
          saveFontsOnInitConfig(this.fonts);
        };

        StreamEngine
          .saveFont({
            dest: config.directory,
            name: font.replace(' ', '-'),
            extension: 'css',
            content: buffer,
          }, function (error) {
            if (error) throw error;

            MessagesEngine
              .display(('– ' + font + ' was installed successfully!').green);
          });
        });
    };
  });
};

module.exports = install;
