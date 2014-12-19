## 0.0.4 (2014/12/18)

Improvements:

- Now the default name of downloaded files were changed. We adopted the slugification standard.
- Added the ability to download multiple fonts at once.
- Added the ability to download fonts without a typers.json.

Features:

- Added the `--min`inication option.
- Bootstrapped the test foundation with Mocha and Expect.js.

Bugfixes:

- Fixed encoding error when trying to --save a font with specified weight.
- Prevented typers to init twice (typers.json could be overwritten using --force or -f option).

Documentation:

- Added the Contributing Guidelines.

## 0.0.3 (2014/11/26)

Bugfixes:

- A message saying your font installation happened successfully when the font
is not found was removed.
- Fixed the message which displays when you try to install a font without
`typers.json` file.

Documentation:

- Improved the docs to teach how to initialize Typers in a better way.
- Added `CHANGELOG.md` file.
