# youtube-ids [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  <span class="badge-patreon"><a href="https://www.patreon.com/robertjgabriel" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
> Create IDs similar to YouTube e.g. yzNjIBEdyww

## Installation

```sh
$ npm install --save youtube-ids --save
```

## Usage

```js
const youtubeIds = require('youtube-ids');

var youtubeStyleIDEncode = youtubeIds.encode(9871923729)); // Returns ruAfMk
var youtubeStyleIDDecode = youtubeIds.decode('ruAfMk')); // Returns 9871923729

```
## License

MIT © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/youtube-ids.svg
[npm-url]: https://npmjs.org/package/youtube-ids
[travis-image]: https://travis-ci.com/RobertJGabriel/youtube-ids.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/youtube-ids
[daviddm-image]: https://david-dm.org/RobertJGabriel/youtube-ids.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/youtube-ids
