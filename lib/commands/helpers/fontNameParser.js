function fontNameParser (fonts) {
  fonts = function () {
    if (2 === fonts.length) {
      return fonts.join(' and ');
    };

    if (2 < fonts.length) {
      return fonts.join(', ');
    };

    return fonts.toString();
  } ();

  return fonts;
};

module.exports = fontNameParser;
