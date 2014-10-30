#! /usr/bin/env node

var program           = require ('commander')
    , colors          = require ('colors')
    , init            = require ('./commands/init')
    , install         = require ('./commands/install')
    , prepareFontName = require ('./utils/prepareFontName');

program
  .version('0.0.1')
  .usage('[command] <font-name> [options]');

program
  .option('-d, --dir', 'Set the directory that fonts will be installed.')
  .command('init [options]')
  .description('Start the project settings.')
  .action(function (dir) {
    init.execute({
      dir: dir
    });
  });

program
  .option('-s, --save', 'Save the font information to the project\'s settings.')
  .option('-o, --style <engine>', 'Specify the stylesheet engine (css|sass|less)')
  .option('-l, --local', 'Save and install locally the desired font.')
  .command('install [font-name] [options]')
  .description('Download & install a font.')
  .action(function (fontName) {
    fontName = fontName && prepareFontName(fontName) || undefined;

    if (program.save) {
      install.save = true;
    };

    if (program.style) {
      // TODO
    };

    if (program.local) {
      // TODO
    };//

    install({
      save: install.save
    }, fontName);
  });

program
  .command('search <font-name>')
  .description('Search for a font by its name.')
  .action(function (fontName) {
    // TODO
  });

program
  .command('help')
  .description('Show this help.')
  .action(function () {
    program.help();
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
};
