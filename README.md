
# url-encode-decode
[![package version](https://img.shields.io/npm/v/url-encode-decode.svg?style=flat-square)](https://npmjs.org/package/url-encode-decode)
[![package downloads](https://img.shields.io/npm/dm/url-encode-decode.svg?style=flat-square)](https://npmjs.org/package/url-encode-decode)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/url-encode-decode.svg?style=flat-square)](https://npmjs.org/package/url-encode-decode)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> URL encoding & decoding

## Table of Contents

- [url-encode-decode](#url-encode-decode)
    - [Table of Contents](#table-of-contents)
    - [About](#about)
    - [Install](#install)
    - [Usage](#usage)
    - [TypeScript](#typescript)
    - [Contribute](#contribute)
    - [License](#license)


## About

Based on [this snippet](https://www.codeproject.com/Articles/1016044/JavaScript-URL-encode-decode-and-escape).

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install url-encode-decode
$ # OR
$ yarn add url-encode-decode
```

## Usage

```js
const { encode, decode } = require('url-encode-decode')

encode('foo bar baz') // 'foo+bar+baz'
encode(`Hi! How? & you person/\\`) // 'Hi%21+How%3F+%26+you+person%2F%5C'

decode('foo+bar+baz') // 'foo bar baz'
decode('Hi%21+How%3F+%26+you+person%2F%5C') // `Hi! How? & you person/\\`

```

## TypeScript

Type declarations are included; a separate `@types` package is not needed.

```ts
import codec = require('url-encode-decode')

const encoded: string = codec.encode('hello world')
const decoded: string = codec.decode(encoded)
```

Both functions accept an optional string and return a string. Omitting the
argument or passing `undefined` returns an empty string. Non-string inputs throw
an error; malformed Unicode passed to `encode` or malformed percent-encoded data
passed to `decode` throws a `URIError`.

For native Node.js ES modules, use the CommonJS package's default import:

```ts
import codec from 'url-encode-decode'

codec.decode(codec.encode('hello world'))
```

When compiling default imports to CommonJS, enable `esModuleInterop` in your
TypeScript configuration.

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

Run `npm test` for the JavaScript and strict TypeScript tests, and `npm run lint`
for JavaScript formatting checks.

## License

MIT
