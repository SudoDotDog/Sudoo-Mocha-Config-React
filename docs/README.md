# Sudoo-Mocha-Config-React

[![npm version](https://badge.fury.io/js/%40sudoo%2Fmocha-config-react.svg)](https://www.npmjs.com/package/@sudoo/mocha-config-react)
[![downloads](https://img.shields.io/npm/dm/@sudoo/mocha-config-react.svg)](https://www.npmjs.com/package/@sudoo/mocha-config-react)

Mocha configuration for TypeScript and React

## Install

```sh
yarn add @sudoo/mocha-config-react --dev
# Or
npm install @sudoo/mocha-config-react --save-dev
```

## Usage

Run the following command

```makefile
mocha := node_modules/.bin/mocha
mocha-config := node_modules/@sudoo/mocha-config-react/.mocharc.json
$(mocha) --config $(mocha-config)
```
