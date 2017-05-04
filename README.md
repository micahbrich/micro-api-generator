# generator-micro-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> create a quick & tiny microservice api using zeit&#39;s micro

## Installation

First, install [Yeoman](http://yeoman.io) and generator-micro-api using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-micro-api
```

Then generate your new project:

```bash
yo micro-api
```

## End Result

This just installs a bunch of useful API-related modules to throw together a microservice. The default template gives you a super-simple structure:

```
├── index.js
├── node_modules
├── package.json
└── yarn.lock
```

It makes a single-file microservice for you, defaulting to only accepting `POST` requests, a compressed response, and simple readable errors to throw using [`micro-boom`](https://github.com/onbjerg/micro-boom). 

Uses [`micro-post`](https://github.com/romuloalves/micro-post) by default, but has [`micro-get`](https://github.com/romuloalves/micro-get) for easily switching to a `GET` service instead, and/or [`microrouter`](https://github.com/pedronauck/micro-router) for more complex stuff. Just import 'em and use 'em, they're installed already.

```js
const { send, json } = require('micro')
const post = require('micro-post')
const compress = require('micro-compress')
const { handleErrors, createError } = require('micro-boom')
const cors = require('micro-cors')({
  allowMethods: ['POST', 'OPTIONS'],
  origin: '*'
})

let app = post(async(req, res) => {
  const data = await json(req)
  return data
})

app = handleErrors(app)
app = compress(app)
app = cors(app)
module.exports = app

```

## License

GPL-3.0 © [micah rich](micahrich.com)


[npm-image]: https://badge.fury.io/js/generator-micro-api.svg
[npm-url]: https://npmjs.org/package/generator-micro-api
[travis-image]: https://travis-ci.org/micahbrich/generator-micro-api.svg?branch=master
[travis-url]: https://travis-ci.org/micahbrich/generator-micro-api
[daviddm-image]: https://david-dm.org/micahbrich/generator-micro-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/micahbrich/generator-micro-api
