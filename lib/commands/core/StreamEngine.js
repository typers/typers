var fs = require ('fs');

function StreamEngine () {
  this.save = function (content, destiny, callback) {
    return fs.writeFile(destiny, content, callback);
  };
};

module.exports = StreamEngine;
