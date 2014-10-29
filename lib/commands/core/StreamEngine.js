var fs = require ('fs');

function StreamEngine () {
  this.save = function (content, destiny, callback) {
    return fs.writeFile(destiny, content, callback);
  };

  this.open = function (file, callback) {
    return fs.readFile(file, callback);
  };
};

module.exports = StreamEngine;
