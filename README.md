# ember-redux-saga-shim

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Installation

```bash
ember install ember-redux-saga-shim
ember install ember-maybe-import-regenerator
```

## Usage

```js
import createSagaMiddleware from 'redux-saga'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
```

To learn more about `redux-saga` and how to use it visit the [redux-saga](https://github.com/yelouafi/redux-saga) Github page.

[ci-img]: https://img.shields.io/travis/ember-redux/ember-redux-saga-shim.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ember-redux/ember-redux-saga-shim
[cov-img]: https://img.shields.io/coveralls/ember-redux/ember-redux-saga-shim.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ember-redux/ember-redux-saga-shim
[ember-img]: https://img.shields.io/badge/ember-1.12.2+-green.svg "Ember 1.12.2+"
[npm-img]: https://img.shields.io/npm/v/ember-redux-saga-shim.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-redux-saga-shim
