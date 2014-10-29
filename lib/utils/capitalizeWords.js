function capitalizeWords (sentence) {
  return sentence
    .replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
};

module.exports = capitalizeWords;
