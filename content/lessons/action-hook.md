---
title: "Action hook"
lesson: 3
chapter: 1
type: "lesson"
tags:
    - guide
---

The `config` property would be useless if we do not actually use it. Clipped provides hooks for using final config.

For example if you want to it print hello when you run `clipped hello`, you can add this line:

```js
module.exports = async clipped => {
  clipped.hook('hello')
    .add('say-hello-world', async clipped =>
      clipped.print('Hello World!')
    )
}
```

You maybe also use one hook before / after another hook by adding a prefix `pre-` or `post-`:

```js
module.exports = async clipped => {
  clipped.hook('hello')
    .add('say-hello-world', async clipped =>
      clipped.print('Hello World!')
    )

  clipped.hook('post-hello')
    .add('say-good-bye', async clipped =>
      clipped.print('Good Bye!')
    )
}
```

Or if you want to use a hook in another hook:

```js
module.exports = async clipped => {
  clipped.hook('hello')
    .add('say-hello-world', async clipped =>
      clipped.print('Hello World!')
    )

  clipped.hook('hello-again')
    .add('exec-hello', async clipped => {
        await clipped.execHook('hello')
        clipped.print('again! ;)')
    })
```

For full reference of action hook, check out [API](/clipped-api) in later sections
