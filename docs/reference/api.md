---
sidebarDepth: 3
---

# API

## Hook

### `hook(name).add`

- Arguments:
  - `{string} name`
  - `{Function | Function[]} task`
  - `{number} [index]`

- Usage:

  Add a task under a hook, placed after index if given.

  If given an array of tasks, they will be run in parallel

  ```js
  api.hook('hello-world')
    .add('say-hello', async api => {
      console.log('Hello!!')
    })
  ```

### `hook(name).delete`

- Arguments:
  - `{string} name`

- Usage:
  Delete a task under a hook

  ```js
  api.hook('hello-world')
    .delete('say-hello')
  ```

### `hook(name).modify`

- Arguments:
  - `{string} name`
  - `{Function | Function[]} modifier`

- Usage:
  Modify tasks under a hook.

  `modifier` should return the result tasks

  ```js
  api.hook('hello-world')
    .modify('say-hello', cbs => {
      cbs.push(api => console.log('World!!!'))
      return cbs // REQUIRED
    })
  ```

### `execHook(name)`

- Arguments
  - `{string} name`

- Usage:
  Execute hook **asynchronously**

  ```js
  await api.execHook('hello-world')
  ```

## Helper

### `fs.copy`

- Arguments:
  - `{Object | Object[]} operation`
  - `{string} operation.src`
  - `{string} operation.dest`

- Usage:

  Copy file or folder recursively from `src` to `dest`

### `fs.remove`

- Arguments:
  - `{Object | Object[]} operation`
  - `{string} operation.path`

- Usage:

  Delete file or folder recursively at `path`

### `fs.move`

- Arguments:
  - `{Object | Object[]} operation`
  - `{string} operation.src`
  - `{string} operation.dest`

- Usage:

  Move file or folder recursively from `src` to `dest`

### `fs.mkdir`

- Arguments:
  - `{Object | Object[]} operation`
  - `{string} operation.path`

- Usage:

  Create folder if not exist at `path`

### `fs.emptydir`

- Arguments:
  - `{Object | Object[]} operation`
  - `{string} operation.path`

- Usage:

  Clears folder if exist at `path`

### `fs.copyTpl`

- Arguments:
  - `{Object | Object[]} operation`
  - `{string} operation.src`
  - `{string} operation.dest`
  - `{Object} [operation.context]`
  - `{Object} [operation.tplOptions]`
  - `{Object} [operation.options]`

- Usage:

  Copy ejs template file from `src` to `dest`, with `context` as variables. `tplOptions` is passed to `mem-fs-editor`

### `exec`

- Arguments:
  - `{string} cmd`
  - `{Object} opt`

- Usage:

  Similar to `child_process.exec`

### `spawn`

- Arguments:
  - `{string} cmd`
  - `{any[]} args`
  - `{Object} opt`

- Usage:

  Similar to `child_process.spawn`

### `prompt`

- Arguments:
  - `{Object[] | Object} prompt`
  - `{Object} opt`

- Usage
   Show prompt to get user input. Refer to [Prompts](https://github.com/terkelg/prompts) for furthur info.

### `editPkg`

- Arguments:
  - `{Object | Function} mutator`

- Usage
  Edit `package.json`. `mutator` is passed in current `package.json`, does not need to return value.

### `install`

- Arguments:
  - `string[]` deps`

- Usage
  Install dependencies.

  ```js
  await api.install(['clipped', '@clipped/plugin-babel'])
  ```

## Plugin

### `use`

- Arguments:
  - `{Object | Object[] | Function | Function[]} preset`

- Usage:

  Execute plugin. To learn more about plugins go to [Plugin](./plugin/)

### `describe`

- Arguments:
  - `{Object} info`
  - `{string} info.id`: Unique id, format should be like 'org.clipped.webpack'
  - `{string} info.name`
  - `{string} info.description`
  - `{string[]} info.before`: What plugins this plugin should be place before
  - `{string[]} info.after`: What plugins this plugin should be place after

- Usage:
  - Describe a plugin, recommended for published plugin

## Jointed

### `set`

- Arguments:
  - `{string} path`: Path to property you want to modify, can be dot-delimited
  - `{any} value`

- Usage:
  - Sets value at path

  ```js
  /**
  Originally:
  {
    module: {
      rules: []
    }
  }
  **/

  cfg.set('module.rules.js', 12)

  /**
  Modified:
  {
    module: {
      rules: [
        12
      ]
    }
  }
  **/

  console.log(cfg.module.rules.js)
  // 12   
  ```

### `has`

- Arguments:
  - `{string} path`: Path to property you want to check, can be dot-delimited

- Usage:
  Checks if given path contains value.

### `delete`

- Arguments:
  - `{string} path`: Path to property you want to delete, can be dot-delimited

- Usage:
  Delete value at path

### `modify`

- Arguments:
  - `{string} path`: Path to property you want to delete, can be dot-delimited
  - `{Function} modifier`

- Usage:
  Modify property at path. modifier is passed current value. Return value by modifier replaces current value.

  ```js
  cfg.modify('module.rules.js', val => val + 1) // 13
  ```

### `use`

- Arguments:
  - `{string} path`: Path to property you want to set, can be dot-delimited
  - `{Function} plugin`
  - `{any[]} args`

- Usage:
  - Add a plugin such as Webpack / Rollup plugin, with the function and args separated to make them editable afterwards

  ```js
  // {plugins: []}
  cfg.use('plugins.html',
    require('html-webpack-plugin'),
    [{template: 'template.html'}]
  )

  // later...
  cfg.modify('plugins.html.args',
    args => {args[0].template = 'tpl.html'; return args}
  )
  ```

### `alias`

- Arguments:
  - `{string} path`: Path to property you want to set, can be dot-delimited
  - `{Function} func`

- Usage:
  - Point a property to other values. E.g. point Webpack babel-loader options to Babel

  ```js
  {
    babel: {
      presets: ['env'],
      plugins: []
    },
    webpack(cfg, api) {
      cfg.alias('module.rules.js.use.babel.options', () => api.config.babel)
    }
  }

  console.log(api.webpack.module.rules.js.use.babel.options.toConfig())
  /**
  {
    presets: ['env'],
    plugins: []
  }
  **/
  ```

### `toConfig`

- Usage:
  Returns raw value of Jointed

  ```js
  console.log(cfg.toConfig())
  /**
  {
    module: {
      rules: [13]
    }
  }
   **/
  ```
