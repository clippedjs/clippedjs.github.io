---
id: use-preset
title: Using presets
---

## Introduction

As you saw in [Installation and Setup](/docs/en/setup.html), we used a preset called 'clipped-preset-webpack-backend' to compile the example. So what is a preset?

A preset in Clipped is actually a function that is passed `clipped` instance and then do modifications on it. And so your 'clipped.config.js' is actually a preset itself also.

To use another preset in one preset, you need to use `clipped.use` to call it. Since a preset can be *asynchronous*, you will need to use async/await e.g.

```js
module.exports = async clipped => {
  await clipped.use(require('some-other-preset'))
}
```

Official presets are in the [repository](https://github.com/clippedjs/clipped/tree/master/presets), and you are free to contribute to it.

## Config property

Think preset as a layers to transform configuration, `clipped.config` stores the accumulated changes from presets, and is free to be modified

For example in `clipped-preset-webpack`, we applied webpack-chain on `clipped.config.webpack` for modifications in later presets

## Hooks

All actions of clipped are in fact hooks. Hook is actually like npm script, except even stronger. To make a hook:

```js
clipped.hook('hello')
  .add('say-hello-world', async clipped => clipped.print('Hello world!'))
```

Here we added a task to the 'hello' hook, which the name is 'say-hello-world', and the callback prints a string. You can also add parallel callbacks in a single task, or have multiple tasks in a single hook.

We also provide `pre-` and `post-` hooks. For example

```js
clipped.hook('post-hello')
  .add('say-goodby', async clipped => clipped.print('Good bye!'))
```

Will be run after the 'hello' hook.
