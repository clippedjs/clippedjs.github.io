---
title: "Hello World"
lesson: 1
chapter: 1
type: "lesson"
tags:
    - guide
---

##### In this section we will show a minimal example of a clipped.js project

Install `clipped` as global module

```bash
$ npm i -g clipped
```

Then scaffold a new project. (here we use webpack-frontend as example)
```bash
$ clipped init

? Your project name: introduction-to-clippedjs
? Presets to use 
 ◯ docker
 ◯ webpack-backend
❯◉ webpack-frontend
 ◯ webpack-nodejs
 ◯ webpack
 ◯ skip for now
 ```

Use available actions (here we use `dev` as example)
```bash
$ clipped

    Usage:
    clipped <action>

    Available actions:
    version, init, watch, build, dev

$ clipped dev

Starting server on http://localhost:8080

webpack: Compiled successfully.
```
