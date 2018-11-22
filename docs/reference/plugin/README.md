# Introduction

Plugins are the major components in Clipped. It can modify configuration and actions.

## Ways to write plugins

:::warning Note
It is strongly recommended to write a plugin as a function to avoid confusion.
:::

### 1. Function (recommended for publish)

```js
module.exports = () => [
  require('@clipped/plugin-webpack')()
]
```

### 2. Object: For config mutation

:::tip Note
 The Clipped instance is passed in as 2nd arg `api`
:::

```js
module.exports = {
  webpack: {
    entry: {}
  },
  babel(cfg, api) {
    cfg.presets = [['env']]
  }
}
```

### 3. Array: For separating layers

```js
module.exports = [
  {
    rollup: {
      input: //...
    }
  },
  api => api.hook()
]
```
