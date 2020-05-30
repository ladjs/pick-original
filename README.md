# pick-original

[![build status](https://img.shields.io/travis/com/ladjs/pick-original.svg)](https://travis-ci.com/ladjs/pick-original)
[![code coverage](https://img.shields.io/codecov/c/github/ladjs/pick-original.svg)](https://codecov.io/gh/ladjs/pick-original)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ladjs/pick-original.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/pick-original.svg)](https://npm.im/pick-original)

> Transform an Object that was transformed to return only the original properties recursively picked if they are not undefined.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install pick-original
```

[yarn][]:

```sh
yarn add pick-original
```


## Usage

```js
const PickOriginal = require('pick-original');

const pickOriginal = new PickOriginal();

console.log(pickOriginal.renderName());
// script
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
