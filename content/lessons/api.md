---
title: "API"
lesson: 1
chapter: 2
type: "lesson"
tags:
    - guide
---

### Overview

- [Helper](#helper)
- [Preset](#preset)
- [Hook](#hook)

#### Helper

Utility functions

- [`resolve`](#resolve)
- [`clone`](#clone)
- [`exec`](#exec)
- [`fs`](#fs)
- [`log`](#log)

##### `resolve`

Resolves a path from `clipped.config.src`

```js
clipped.config.src = __dirname + 'source'
clipped.resolve('logo.png') // __dirname + 'source/logo.png'
```

##### `clone`

Clones a repo along with its submodules, and `yarn` for each module

```js
clipped.clone(
  'git@github.com:clippedjs/clipped.git',
  'clipped-dev' // destination folder
)
```

##### `exec`

> A better `require('child_process')`   - [npm/execa](https://www.npmjs.com/package/execa)

```js
await clipped.exec(
  'npm',
  ['run', 'build'], // parameters
  {} // options
)
```

##### `fs`

File system functions, accepts an array of operations

```js
// Copy file / folder
clipped.fs.copy([
  {src: file_path, dest: destination_path}
])

// Remove file / folder recursively
clipped.fs.remove([
  {path: path_to_remove}
])

// Move file / folder
clipped.fs.move([
  {src: file_path, dest: destination_path}
])

// Creates directory if not already exist
clipped.fs.mkdir([
  {path: folder_to_mk}
])

// Creates directory or empty it
clipped.fs.emptydir([
  {path: folder_to_mk}
])

// Copy ejs file and apply context to it
clipped.fs.copyTpl([
  {src: template_path, dest: destination_path, context}
])
```

##### `log`

Unifed logging

```js
clipped.print(log_message)
clipped.log(log_message)
```

#### Preset

Functions related to clipped-presets

- [`use`](#use)

##### `use`

Executes preset

```js
clipped.use(require('clipped-preset-webpack-backend'))
```

#### Hook

Functions related to action hooks

- [`hook`](#hook)
- [`execHook`](#execHook)

##### `hook`

Returns context of hook

```js
clipped.hook('pre-' + hook_name) // pre hook
clipped.hook(hook_name)
clipped.hook('post-' + hook_name) // post hook
```

Hook context:

```js
clipped.hook(hook_name)
  .add(task_name, task_function, position) // add task
  .prepend(task_name, task_function) // prepend
  .delete(task_name)
```

##### `execHook`

Executes hook

```js
await clipped.execHook(task_name)
```
