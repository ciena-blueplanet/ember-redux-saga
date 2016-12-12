# ember-redux-saga

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Installation

```bash
ember install ember-redux-saga
```

## Usage

```js
import createSagaMiddleware from 'redux-saga'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
```

To learn more about `redux-saga` and how to use it visit the [redux-saga](https://github.com/yelouafi/redux-saga) Github page.

[ci-img]: https://img.shields.io/travis/ciena-blueplanet/ember-redux-saga.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-blueplanet/ember-redux-saga
[cov-img]: https://img.shields.io/coveralls/cciena-blueplanet/ember-redux-saga.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-blueplanet/ember-redux-saga
[ember-img]: https://img.shields.io/badge/ember-1.12.2+-green.svg "Ember 1.12.2+"
[npm-img]: https://img.shields.io/npm/v/ember-redux-saga.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-redux-saga
