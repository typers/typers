var fontNameParser = require ('./helpers/fontNameParser.js')
    , request      = require ('request');

function parseResponse(content) {
  var APIURL =
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAwnUdBd1OMxpZ7_Y9nzqspTxVxRzCf_GE';

  var options = {
    url: APIURL
  };

  var reply;

  function callback (error, response, body) {
    // TODO: Create a mechanism to react against the callback.
  };

  request(options, callback);

  return reply;
};

function search (fonts) {
  fonts = fontNameParser(fonts);

  function callback (error, response, body) {
    console.log(body);
  };

  request(requestOptions, callback);
};

module.exports = search;
