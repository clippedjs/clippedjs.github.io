---
id: setup
title: Installation and Setup
---

## Installation

Install clipped module from npm:

```sh
npm i -g clipped
```

## First project

Take an express server as example. First you set up the project with typical
```sh
npm init
```

Next create a 'src' folder and add a simple server script:

```js
import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

> Notice that we are using es6 `import` rather than normal nodejs `require`, this is made possible due to the preset that we will `use` later.

Next we will need to use Clipped preset-based configuration

## Preset

Install Clipped's backend preset
```sh
npm i --save-dev clipped-preset-webpack-backend
```

Create a file 'clipped.config.js' with following content:
```js
module.exports = clipped => clipped.use(require('clipped-preset-webpack-backend'))
```

## Fire up

Now all is set and run `clipped build`, it will transpile the souces code into dist folder which can be run with
```sh
node ./dist
```
