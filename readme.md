# @kaliber/po-loader
> Simple webpack loader for po files

## Installation

```
yarn add @kaliber/po-loader
```

## Usage

This package is made to work with webpack but is internaly used in combination with [@kaliber/build](https://github.com/kaliberjs/build)

```js
// config/default.js

module.exports = {
  webpackLoaders: [
    {
      test: /\.po$/,
      loaders: [{ loader: '@kaliber/po-loader' }]
    },
  ],
}
```

```js
import nl from '/translations/nl.po' // this will return the parsed contents of the po file

// your application that reads the contents of the po file.
```

## Disclaimer
This library is intended for internal use, we provide no support, use at your own risk.
