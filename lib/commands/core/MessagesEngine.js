var colors = require ('colors');

function MessagesEngine () {
  this.display = function (message) {
    console.log(message);
  };
};

module.exports = MessagesEngine;
