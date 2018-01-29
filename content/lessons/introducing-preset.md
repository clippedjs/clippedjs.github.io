---
title: "Introducing preset"
lesson: 2
chapter: 1
type: "lesson"
tags:
    - guide
---

A **preset** is whatever npm module that contains **clipped.config.js** file.

> Yup your project is already a preset!

If you look into your project created in [Hello World](/hello-world), the **clipped.config.js** contains following content:

```js
module.exports = async clipped => {
    clipped.use(require('clipped-preset-webpack-frontend'))
}
```

Instead of an object, Clipped.js uses a function for configuration.

#### Why function?

Often we actually need to get something done before running the build tools.

> Maybe we need to do an API call to set the website title? 
>
> Maybe we want to copy some files after a task?

With the help of [Jointed.js](/why-use-jointed), it is way easier to do configurations in function than plain object.

#### `clipped` argument
`clipped` contains the full API, and a `config` property that is an empty jointed object.

For example to use Webpack and add support for `marko`, you may add:

```js
module.exports = async clipped => {
    clipped.use(require('clipped-preset-webpack-frontend'))
    clipped.config.webpack
      .module
         .rules
            .add('marko', {
                test: /\.marko$/,
                include: clipped.resolve('src'),
                loader: 'marko-loader'
            })
}
```

For more about the API of `clipped` and how to use `config` joints,  check out [Jointed.js API](/jointed-api) in later sections.
