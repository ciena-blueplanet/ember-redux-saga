import {expect} from 'chai'
import {describe, it} from 'mocha'

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

describe('redux-saga', function () {
  it('default export', function () {
    expect(typeof createSagaMiddleware).to.equal('function')
  })

  describe('effects', function () {
    it('exports actionChannel method', function () {
      expect(typeof actionChannel).to.equal('function')
    })

    it('exports apply method', function () {
      expect(typeof apply).to.equal('function')
    })

    it('exports call method', function () {
      expect(typeof call).to.equal('function')
    })

    it('exports cancel method', function () {
      expect(typeof cancel).to.equal('function')
    })

    it('exports cancelled method', function () {
      expect(typeof cancelled).to.equal('function')
    })

    it('exports cps method', function () {
      expect(typeof cps).to.equal('function')
    })

    it('exports flush method', function () {
      expect(typeof flush).to.equal('function')
    })

    it('exports fork method', function () {
      expect(typeof fork).to.equal('function')
    })

    it('exports join method', function () {
      expect(typeof join).to.equal('function')
    })

    it('exports put method', function () {
      expect(typeof put).to.equal('function')
    })

    it('exports race method', function () {
      expect(typeof race).to.equal('function')
    })

    it('exports select method', function () {
      expect(typeof select).to.equal('function')
    })

    it('exports spawn method', function () {
      expect(typeof spawn).to.equal('function')
    })

    it('exports take method', function () {
      expect(typeof take).to.equal('function')
    })

    it('exports takeEvery method', function () {
      expect(typeof takeEvery).to.equal('function')
    })

    it('exports takeLatest method', function () {
      expect(typeof takeLatest).to.equal('function')
    })

    it('exports takem method', function () {
      expect(typeof takem).to.equal('function')
    })

    it('exports throttle method', function () {
      expect(typeof throttle).to.equal('function')
    })
  })

  describe('utils', function () {
    it('exports SAGA_ACTION method', function () {
      expect(typeof SAGA_ACTION).to.equal('string')
    })

    it('exports TASK method', function () {
      expect(typeof TASK).to.equal('string')
    })

    it('exports arrayOfDeffered method', function () {
      expect(typeof arrayOfDeffered).to.equal('function')
    })

    it('exports asEffect method', function () {
      expect(typeof asEffect).to.equal('object')
    })

    it('exports createMockTask method', function () {
      expect(typeof createMockTask).to.equal('function')
    })

    it('exports deferred method', function () {
      expect(typeof deferred).to.equal('function')
    })

    it('exports is method', function () {
      expect(typeof is).to.equal('object')
    })

    it('exports noop method', function () {
      expect(typeof noop).to.equal('function')
    })
  })
})
