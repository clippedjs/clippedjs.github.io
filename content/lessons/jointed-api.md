---
title: "Jointed.js API"
lesson: 2
chapter: 2
type: "lesson"
tags:
    - guide
---

> `clipped.config` is a `Jointed` instance

### Overview

- [Array / Object](#array--object)
- [Constructor](#constructor)

#### Array / Object

- [`set`](#set)
- [`get`](#get)
- [`toJSON`](#tojson)

##### `set`

Assigns value to key

```js
clipped.config.set('site-title', 'Clipped.js Documentation')

clipped.config['site-title'] // 'Clipped.js Documentation'
```

##### `get`

Gets value of corresponding key

```js
clipped.config.get('site-title') // Clipped.js Documentation'
```

##### `toJSON`

Gets JSON compatitable value

> For object and arrays, must use this for getting plain object and array

```js
clipped.config.webpack
  .entry
    .mark()
      .vendor
        .set('reactjs', 'react')
        .set('d3')
    .back()
      .index
        .set('main', 'src/app.js')

clipped.config.webpack.toJSON()
/*
{
  entry: {
    index: ['src/app.js'],
    vendor: [
      'react', 'd3'
    ]
  }
}
*/
```

#### Constructor

For cases like Webpack's `plugin` array

- [`use`](#use)
- [`modify`](#modify)

##### `use`

Adds a constructor and its parameters

> Be sure to put the parameters in an array

```js
clipped.config.webpack.use(
    'define',
    webpack.DefinePlugin,
    // Must put in an array
    [{
      'process.env': {
        NODE_ENV: process.env.NODE_ENV ? '"production"' : '"development"'
      }
    }]
)
```

##### `modify`

Pass callback to modify 'args` i.e. parameters of the constructor

> Here the `args` 

```js
clipped.config.webpack
  .plugins
    .banner
      .modify('args', args => {
        args[0].banner = "require('source-map-support/register')"
        return args
      })
```
