var slug = require ('slug');

function prepareFileName (fileName, extension) {
    slug.charmap[':'] = '-';
    slug.charmap[','] = '-';
    return slug(fileName.replace(' ', '-')).toLowerCase() + '.' + extension;
  }

module.exports = prepareFileName;
