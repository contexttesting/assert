# @zoroaster/assert

[![npm version](https://badge.fury.io/js/@zoroaster/assert.svg)](https://npmjs.org/package/@zoroaster/assert)

`@zoroaster/assert` is The Assertion Library For Zoroaster Context Testing Framework Including Deep Equal & Assert Throws.

```sh
yarn add @zoroaster/assert
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`assert(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@zoroaster/assert.Config`](#type-_@zoroaster/assertconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import assert from '@zoroaster/assert'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `assert(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@zoroaster/assertconfig">`_@zoroaster/assert.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import assert from '@zoroaster/assert'

(async () => {
  const res = await assert({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Context Testing][1] 2019

[1]: https://contexttesting.com

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>