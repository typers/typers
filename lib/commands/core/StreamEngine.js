var fs       = require ('fs')
    , mkdirp = require ('mkdirp');

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
  save: function (dest, content, callback) {
    return fs.writeFile(dest, content, callback);
  },
  saveFont: function (file, callback) {
    var finalDest = process.cwd() + file.dest;

    if (!this.fileExists(file.dest)) {
      mkdirp.sync(finalDest, function (error) {
        if (error) throw error;
      });
    };

    this.save
      (finalDest + file.name + '.' + file.extension, file.content, callback);
  },
  fileExists: function (file) {
    return fs.existsSync(file);
  }
};

module.exports = StreamEngine;
