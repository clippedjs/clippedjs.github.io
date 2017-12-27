---
id: api-hook
title: Hook
---

## Hook context

```js
clipped.hook('hook-name')
```

### Available chains

```js
clipped.hook('hook-name')
  .add('task-name', async clipped => {}, index) // Add task at index with callback
  .prepend('another-task-name', async clipped => {}) // Add task at beginning
  .delete('task-name') // Delete task from hook

clipped.hook('hook-name').task('task-name') // Returns the task instance under hook
```

### Parallel callbacks in task
You can set up parallel functions in a task by
```js
clipped.hook('hook-name')
  .add('parallel-task', [
    async clipped => 1,
    async clipped => 2
  ])
```
> Under the hood Clipped wraps the array with `Promise.all` that passes [clipped instance](/docs/en/api-instance.html) to the callbacks
