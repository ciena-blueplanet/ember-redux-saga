# ember-redux-saga-shim

[![Travis][ci-img]][ci-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Installation

```bash
ember install ember-redux-saga-shim
```

## Usage

```js
import createSagaMiddleware from 'redux-saga'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
```

To learn more about `redux-saga` and how to use it visit the [redux-saga](https://github.com/yelouafi/redux-saga) Github page.

## Polyfill

In order to use [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) in your Ember application you need to make sure you do one of the following:

1. **Include Babel Polyfills** –  In order to include Babel polyfills add the following to your *ember-cli-build.js* configuration:

    ```js
    'ember-cli-babel': {
      includePolyfills: true
    }
    ```

    [Learn more…](https://github.com/babel/ember-cli-babel#polyfill)

2. **Add a Polyfill** – Add a polyfill by simply running the following command:

    ```bash
    ember install ember-maybe-import-regenerator
    ```

    [Learn more…](https://github.com/machty/ember-maybe-import-regenerator)

[ci-img]: https://img.shields.io/travis/ember-redux/ember-redux-saga-shim.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ember-redux/ember-redux-saga-shim
[ember-img]: https://img.shields.io/badge/ember-1.13.13+-green.svg "Ember 1.13.13+"
[npm-img]: https://img.shields.io/npm/v/ember-redux-saga-shim.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-redux-saga-shim
