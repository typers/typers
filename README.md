#Typers

![version](http://img.shields.io/npm/v/typers.svg?style=flat)
![coveralls](http://img.shields.io/travis/typers/typers.svg?style=flat)
![Downloads](http://img.shields.io/npm/dm/typers.svg?style=flat)
![Dependencies](https://david-dm.org/typers/typers.svg?style=flat)
![license](http://img.shields.io/npm/l/typers.svg?style=flat)


Typers is a very simple font manager for your web application. Through it, you can search, find and install with ease all the fonts that your app needs to be amazing and more incredible rightly from your terminal prompt.


## Install

    npm install typers -g

## Usage

In your project folder, you can initialize Typers creating a `typers.json` file through this command line:

    typers init

If you want to specify a directory to the downloaded content, you are able
to do this through `--dir` option, such as:

    typers init --dir="/assets/fonts/"

And for everything else:

    typers [command] <font-name> [options]

### Commands:

    init                  Start the project settings.
    install <font-names>  Download the fonts.
    search  <font-name>   Search for a font.
    help                  Show this help.

### Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -s, --save            Save the font information to the project's settings.
    -o, --style <engine>  specify stylesheet engine (css|sass|less)
    --min                 Minify the CSS output from downloaded font.

## Core team

* [Gabriel Zigolis](http://twitter.com/zigolis)
* [Guilherme Oderdenge](http://twitter.com/chiefgui)
* [Ricardo Dantas](http://twitter.com/ricardodantas)

## Contributing

// TODO

## Get engaged!
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/typers/typers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## License

Licensed under the MIT License.
