# Action Hook

You might have noticed that in `package.json`, Clipped added some scripts:

```json
{
  "scripts": {
    "dev": "clipped dev",
    "build": "clipped build"
    // ...
  }
}
```

These scripts use **Hook** to trigger actions. For example, `clipped dev` triggers `dev` hook.

### Adding Hooks

You can add another hook by editting `clipped.config.js`:

```js
module.exports = () => [
  api => {
    api.hook('hello-world')
      .add('say-hello', api => {
        console.log('😊 Hello! 😊')
      })
  }
]
```

When you type `clipped` in terminal, it will return:

```bash
$ clipped

Usage:    clipped ACTION

Actions:
build, dev, hello-world, #...

Presets found:
# ...
```

Now you can run `hello-world` by running `clipped hello-world`:

```bash
$ clipped hello-world

😊 Hello! 😊
```

::: tip Tip
You can use **async** functions in Hook as well!
:::


Consult [Hook](../reference/api.md#hook) page for full reference of **Hook**.
