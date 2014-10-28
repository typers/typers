#! /usr/bin/env node

var colors    = require ('colors')
    , program = require ('commander')
    , install = require ('./commands/install');

program
  .version('0.0.1')
  .option('-I, --install')
  .parse(process.argv);

if (!program.args.length) {
  program.help();
};

if (program.install) {
  install(program.install);
};
