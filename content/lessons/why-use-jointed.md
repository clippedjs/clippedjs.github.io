---
title: "Why use jointed?"
lesson: 3
chapter: 1
type: "lesson"
tags:
    - guide
---

[Clipped.js](https://www.npmjs.com/package/clipped) is directly integrated with [Jointed.js](https://www.npmjs.com/package/jointed) , and recommends user to faciliate it.

#### Reason to use jointed

In Javascript it is very easy to read objects, but difficult to reliably edit an object.

For instance if we have the current object:

```js
const app = {
  user: {
    posts: [
      {
        title: 'Foo',
        comments: [{
          content: 'Nice!'
        }, 'Interesting...']
      },
      { title: 'Bar', comments: [ 'Ok' ] },
      { title: 'Baz', comments: [] },
    ]
  }
}
```

To get a property we can just do

```js
const interesting = app.user.posts[0].comments[1]
```

As long as the schemea remains the same it is not a problem.

But what if we want to delete the 'Interesting...' comment, and add a property `author` as object to 'Nice!'...
...and then later want to set `author`'s property `name` as 'Harry'?

```js
app.user.posts[0].comments.splice(0, 1)

app.user.posts[0].comments[0].author = {}

app.user.posts[0].comments[0].author.name = 'Harry'
```

> Not that convenient huh?

With Jointed we can just do something like

```js
app.use.posts.foo.comments
  .delete('interesting')
  .nice
    .set('author', {})
    .author
      .set('name', 'Harry')
```

You will see that instead of index, we use preset id's like `foo` and `nice` to access the properties in arrays.

Also we are doing these modifications in one single statement, since all functions return the current instance.
This enables us to make furthur modifications in same context.

#### Practical usage

What makes Jointed shine is when we are changing configurations for Webpack, Rollup

Take [Clipped's nodejs preset](https://www.npmjs.com/package/clip-webpack-nodejs) as an example.
```js
// Target webpack for nodejs
clipped.config.webpack
  .set('target', 'node')
  .set('node', {
    __filename: false,
    __dirname: false
  })
  .set('externals', nodeExternals({
    whitelist: [
      /\.(eot|woff|woff2|ttf|otf)$/,
      /\.(svg|png|jpg|jpeg|gif|ico|webm)$/,
      /\.(mp4|mp3|ogg|swf|webp)$/,
      /\.(css|scss|sass|less|styl)$/
    ]
  }))
  .output
    .set('libraryTarget', 'commonjs2')
```

Here we set multiple properties of webpack config, so that when later we come across this segment we immediately know that this is for targetting webpack towards nodejs.

Maybe we want to set entry points also
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

/// later...

clipped.config.webpack
  .entry
    .vendor
      .delete('reactjs')
      .set('preactjs', 'preact)
```

> Notice that we used `mark()` and `back()` here. They are like bookmarks so that you can reset to it after a property access.

##### Disclaimer

It is still 100% legit to directly assign

```js
clipped.config.webpack.entry = {
  index: ['src/main.js'],
  vendor: ['vue', 'vue-router', 'skygear']
}
```

For more about the API of [Jointed.js](https://www.npmjs.com/package/jointed), check out [API](/api#preset) and [Why use jointed?](/why-use-jointed) in later sections.
