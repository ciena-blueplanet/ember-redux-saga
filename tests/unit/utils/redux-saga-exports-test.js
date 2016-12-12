import {expect} from 'chai'
import {describe, it} from 'mocha'

import createSagaMiddleware from 'redux-saga'

import {
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
  takem
} from 'redux-saga/effects'

describe('redux-saga', function () {
  it('exports function', function () {
    expect(typeof createSagaMiddleware).to.equal('function')
  })

  describe('/effects', function () {
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

    it('exports takem method', function () {
      expect(typeof takem).to.equal('function')
    })
  })
})
