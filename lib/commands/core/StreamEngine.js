var fs = require ('fs');

var StreamEngine = {
  open: function (file, callback) {
    return fs.readFile(file, callback);
  },
  save: function (dest, content, callback) {
    return fs.writeFile(dest, content, callback);
  }
};

module.exports = StreamEngine;
