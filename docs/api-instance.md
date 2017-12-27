---
id: api-instance
title: Instance
---

## First level of clipped instance:

### Helpers
```js
clipped.resolve('./index.html') // Resolves absolute path from clipped.config.context
clipped.exec('npm view clipped version') // Executes cmd command
clipped.clone('https://github.com/Owner/Repo.git') // Clones and yarn installs git repo
clipped.
```

### Hook
```js
clipped.hook('hook-name')
```
Returns context of hook according to hook name. [More info here](/docs/en/api-hook.html)

### Preset
```js
clipped.use(require('preset-name'))
```
Passese the clipped instance and executes preset
