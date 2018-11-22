---
---

# Introduction

## What is Clipped.js?

Clipped.js is a tool to make creating and configuring apps a breeze.

Clipped consists of 2 parts: **Config** and **Action**.

### Config

**Config** are settings for tools, such as `webpack.config.js` and `.babelrc`. Often these are considered project-specific, when the fact is they are often identical cross projects.

To lessen the inconvenience of copy-pasting the config, tools like `create-react-app`, `@vue/cli` appeared to abstract this part. However either it removes the customizability so you have to `eject` to customize, or restricted to certain toolsets. For instance you cannot use Rollup in `@vue/cli`. 

### Action

**Action** are using config to do tasks. An example will be using Babel to transpile files using `.babelrc` as options. Currently you often do actions with npm scripts. It is convenient, but again you cannot reuse it cross-projects.

Note that often **Config** are actually dependent on the **Action**. For instance you want size analyzer in `npm run dev`, and strip `console.log`'s in `npm run build`. This is also handled nicely by Clipped.

## How it works

Clipped believes that both **Config** and **Action** should be reusable. By using the 'Plugin' concept, overrides can be applied layer-by-layer. This makes configuration way easier to reason about.

In fact, the concept works so well that plugins can be easily integrated with each other. For example, **Babel** plugin can be integrated with **Rollup** or **Webpack** by placing it under the bundlers, which makes corresponding changes if the bundlers are detected.
