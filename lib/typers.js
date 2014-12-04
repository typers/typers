#! /usr/bin/env node

var program           = require ('commander')
    , colors          = require ('colors')
    , init            = require ('./commands/init')
    , install         = require ('./commands/install')
    , search          = require ('./commands/search');

program
  .version('0.0.3')
  .usage('[command] [options] <font-name...> ');

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
  .option('--min', 'Minify the CSS output')
  .option('-o, --style <engine>', 'Specify the stylesheet engine (css|sass|less)')
  .option('-l, --local', 'Save and install locally the desired font.')
  .command('install [options] [font-name...]')
  .description('Download & install a font.')
  .action(function (fontName, fonts) {
    fonts.unshift(fontName);

    install({
        save: program.save,
        minify: program.min
      }, fonts);
  });

program
  .command('search <font-name>')
  .description('Search for a font by its name.')
  .action(function (fontName) {
    search(fontName);
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
