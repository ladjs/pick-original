# [**@ladjs/pick-original**](https://github.com/ladjs/pick-original)

[![build status](https://github.com/ladjs/pick-original/actions/workflows/ci.yml/badge.svg)](https://github.com/ladjs/pick-original/actions/workflows/ci.yml)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ladjs/pick-original.svg)](LICENSE)

> Transform an Object that was transformed to return only the original properties recursively picked if they are not undefined.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install @ladjs/pick-original
```


## Usage

```js
const pickOriginal = require('@ladjs/pick-original');

function createObj(doc) {
  doc.id = Date.now().toString();
  return doc;
}

const original = { foo: 'bar' };

const transformed = pickOriginal(createObj(original), original);

console.log(transformed);

// { foo: 'bar' }
```


## Contributors

| Name         |
| ------------ |
| **Titanism** |


## License

[MIT](LICENSE) © Titanism


##

[npm]: https://www.npmjs.com/
