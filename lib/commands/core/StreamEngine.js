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
    var self = this;

    fs.exists(file.dest, function (exists) {
      var finalDest = process.cwd() + file.dest;

      if (!exists) {
        mkdirp.sync(finalDest, function (error) {
          if (error) throw error;
        });
      };

      self.save
        (finalDest + file.name + '.' + file.extension, file.content, callback);
    });
  },
  exists: function(file){
    return fs.existsSync(file);
  }
};

module.exports = StreamEngine;
