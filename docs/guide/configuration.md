# Configuration

## Config File

The essential file to configure Clipped is `clipped.config.js`

It exports `() => []`, running the plugins one-by-one:

```js
module.exports = () => [
  require('@clipped/plugin-webpack')(),
  require('@clipped/plugin-babel')(),
  require('@clipped/plugin-react')()
]
```

## Plugin Structure

Plugins are all functions, therefore you can customize them with options:

```js
module.exports = () => [
  require('@clipped/plugin-babel')({jsx: 'Radi.r'}),
]
```

In Clipped, all plugins are simple mutators to configuration. 

For example if you look into [@clipped/plugin-babel](https://github.com/clippedjs/clipped/blob/master/plugins/babel/clipped.config.js), you will notice parts of babel config:

```js
module.exports = ({jsx} = {}) => [
  {
    babel: {
      presets: [],
      plugins: [
        [
          require.resolve('@babel/plugin-proposal-object-rest-spread'),
          {
            useBuiltIns: true,
            loose: true
          }
        ],
        [require.resolve('@babel/plugin-proposal-class-properties')]
      ]
  },
]
```

Notice that it is like moving content from `.babelrc` to `clipped.config.js`.

## Config Extension

You can customize the Babel configuration by adding another layer below `@clipped/plugin-babel`:

```js
module.exports = () => [
  // ...
  require('@clipped/plugin-babel')(),
  {
    babel(cfg) {
      cfg.plugins.push([require.resolve('@babel/plugin-transform-react-jsx')])
    }
  }
  // ...
]
```

`babel() {}` mutates `cfg` directly, which results in:

```js
{
  babel: {
    {
      presets: [],
      plugins: [
        [
          require.resolve('@babel/plugin-proposal-object-rest-spread'),
          {
            useBuiltIns: true,
            loose: true
          }
        ],
        [require.resolve('@babel/plugin-proposal-class-properties')],
        [require.resolve('@babel/plugin-transform-react-jsx')]
      ]
  },
  }
}
```

::: tip Tip
The layer you just added is also a **Plugin**<sup>TM</sup> 😉
:::


Go to [Plugin](../reference/plugin/#introduction) page to learn more about plugins.

## Jointed

You can modify the configuration like normal variables, but Clipped also added a thin layer on top called **Jointed** to make layering easier.

For example we want to mutate the previous plugin:

:::tip Comparison
**Jointed** way:
```js
{
  babe(cfg) {
    cfg.set('presets.env', [require.resolve('@babel/preset-env')])
  }
}
```

is same as:

```js
{
  babel(cfg) {
    cfg.presets.env.push([require.resolve('@babel/preset-env')])
  }
}
```
:::

Or maybe we want to add another plugin in Webpack:

:::tip Comparison
**Jointed** way:
```js
{
  webpack(cfg) {
    cfg.plugins.use('html', require('html-webpack-plugin'), [{
      template: 'template.html'
    }])
  }
}
```

is same as:

```js
{
  webpack(cfg) {
    cfg.plugins.push(require('html-webpack.plugin')({
      template: 'template.html'
    }))
  }
}
```
:::

Go to [Jointed](../reference/api.md#jointed) to learn more.
