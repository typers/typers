var MessagesEngine = {
  display: function (message) {
    console.log(message);
  },
  displayError: function (message, error) {
    console.error(message + '\n' + error);
  }
};

module.exports = MessagesEngine;
