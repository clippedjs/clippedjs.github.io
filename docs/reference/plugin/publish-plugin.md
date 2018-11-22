# Publish you plugin

In order to make your plugin discoverable by `clipped create`, it needs to have keywords `clipped` and `plugin` in `package.json`.

```json
{
  // ...
  "keywords": [
    "clipped",
    "plugin"
  ],
  "main": "clipped.config.js",
  "publishConfig": {
    "access": "public"
  }
}
```
