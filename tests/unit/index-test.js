import { test, module } from 'qunit';
import createSagaMiddleware, {effects, utils} from 'redux-saga'

const {
  actionChannel,
  apply,
  call,
  cancel,
  cancelled,
  cps,
  flush,
  fork,
  join,
  put,
  race,
  select,
  spawn,
  take,
  takeEvery,
  takeLatest,
  takem,
  throttle
} = effects

const {
  SAGA_ACTION,
  TASK,
  arrayOfDeffered,
  asEffect,
  createMockTask,
  deferred,
  is,
  noop
} = utils

module('Unit | Saga | Tests');

test('default export', function(assert) {
  assert.equal(typeof createSagaMiddleware, 'function');
});

test('exports actionChannel method', function(assert) {
  assert.equal(typeof actionChannel, 'function');
});

test('exports apply method', function(assert) {
  assert.equal(typeof apply, 'function');
});

test('exports call method', function(assert) {
  assert.equal(typeof call, 'function');
});

test('exports cancel method', function(assert) {
  assert.equal(typeof cancel, 'function');
});

test('exports cancelled method', function(assert) {
  assert.equal(typeof cancelled, 'function');
});

test('exports cps method', function(assert) {
  assert.equal(typeof cps, 'function');
});

test('exports flush method', function(assert) {
  assert.equal(typeof flush, 'function');
});

test('exports fork method', function(assert) {
  assert.equal(typeof fork, 'function');
});

test('exports join method', function(assert) {
  assert.equal(typeof join, 'function');
});

test('exports put method', function(assert) {
  assert.equal(typeof put, 'function');
});

test('exports race method', function(assert) {
  assert.equal(typeof race, 'function');
});

test('exports select method', function(assert) {
  assert.equal(typeof select, 'function');
});

test('exports spawn method', function(assert) {
  assert.equal(typeof spawn, 'function');
});

test('exports take method', function(assert) {
  assert.equal(typeof take, 'function');
});

test('exports takeEvery method', function(assert) {
  assert.equal(typeof takeEvery, 'function');
});

test('exports takeLatest method', function(assert) {
  assert.equal(typeof takeLatest, 'function');
});

test('exports takem method', function(assert) {
  assert.equal(typeof takem, 'function');
});

test('exports throttle method', function(assert) {
  assert.equal(typeof throttle, 'function');
});

test('exports SAGA_ACTION method', function(assert) {
  assert.equal(typeof SAGA_ACTION, 'string');
});

test('exports TASK method', function(assert) {
  assert.equal(typeof TASK, 'string');
});

test('exports arrayOfDeffered method', function(assert) {
  assert.equal(typeof arrayOfDeffered, 'function');
});

test('exports asEffect method', function(assert) {
  assert.equal(typeof asEffect, 'object');
});

test('exports createMockTask method', function(assert) {
  assert.equal(typeof createMockTask, 'function');
});

test('exports deferred method', function(assert) {
  assert.equal(typeof deferred, 'function');
});

test('exports is method', function(assert) {
  assert.equal(typeof is, 'object');
});

test('exports noop method', function(assert) {
  assert.equal(typeof noop, 'function');
});
