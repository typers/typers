#! /usr/bin/env node

var program   = require ('commander')
    , init    = require ('./commands/init')
    , install = require ('./commands/install');

program
  .version('0.0.1')
  .usage('[command] <font-name> [options]')
  .command('init')
  .description('Start the project settings.')
  .action(function () {
    init.exec();
  });

program
  .option('-s, --save', 'Save the font information to the project\'s settings.')
  .option('-o, --style <engine>', 'Specify the stylesheet engine (css|sass|less)')
  .option('-r, --remote', 'Save and install remotely the desired fonts.')
  .command('install <font-name> [options]')
  .description('Download & install a font.')
  .action(function (fontName) {
    if (program.save) {
      // TODO
    };

    if (program.style) {
      // TODO
    };//

    install({
        remote: program.remote
      }, fontName);
  });

if (program.install) {
  install(
    {
      remote: program.remote
    },
    program.install
  );
};

program
  .command('search <font-name>')
  .description('Search for a font by its name.')
  .action(function (fontName) {
    // TODO
  });//

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
