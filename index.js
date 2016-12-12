'use strict'

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'redux-saga',

  treeForAddon (tree) {
    const reduxSagaPath = path.dirname(require.resolve('redux-saga/src/index.js'))
    let reduxSagaTree = this.treeGenerator(reduxSagaPath)

    // Remove non-Javascript files
    reduxSagaTree = new Funnel(reduxSagaTree, {
      include: [
        '**/*.js'
      ]
    })

    reduxSagaTree = replace(reduxSagaTree, {
      files: ['**/internal/*.js'],
      patterns: [
        {
          match: /process\.env\.NODE_ENV/g,
          replacement: "'production'"
        }
      ]
    })

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxSagaTree)
    }

    const trees = mergeTrees([reduxSagaTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
