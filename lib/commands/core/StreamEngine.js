var fs       = require ('fs')
    , mkdirp = require ('mkdirp')
    , slug   = require ('slug');

var StreamEngine = {
  getUserInitConfigFileName: 'typers.json',
  getInitConfigFilePath: __dirname + '/../../initConfig.json',
  getUserInitConfigFilePath: function () {
    return process.cwd() + '/' + this.getUserInitConfigFileName;
  },
  open: function (file, callback) {
    callback = callback || '';

    return fs.readFile(file, callback);
  },
  save: function (options, callback) {
    var dest = options.fileName;
    if (options.folder) {
      dest = options.folder + options.fileName;
    };

    return fs.writeFile(dest, options.content, callback);
  },
  saveFont: function (file, callback) {
    var finalDest = process.cwd() + file.dest;

    if (!this.fileExists(file.dest)) {
      mkdirp.sync(finalDest, function (error) {
        if (error) throw error;
      });
    };

    slug.charmap[':'] = '-';
    slug.charmap[','] = '-';

    this.save({
      folder: finalDest,
      fileName: slug(file.name).toLowerCase() + '.' + file.extension,
      content: file.content
    }, callback);
  },
  fileExists: function (file) {
    return fs.existsSync(file);
  }
};

module.exports = StreamEngine;
