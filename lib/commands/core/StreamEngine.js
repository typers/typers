var fs = require ('fs');

function StreamEngine () {
  this.save = function (content, destiny, callback) {
    return fs.writeFile('teste.txt', content, callback);
  };
};

module.exports = StreamEngine;
