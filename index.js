'use strict'

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'redux-saga',

  treeForAddon (tree) {
    const reduxSagaPath = path.dirname(require.resolve('redux-saga/src/index.js'));
    let reduxSagaTree = this.treeGenerator(reduxSagaPath);

    reduxSagaTree = new Funnel(reduxSagaTree, {
      include: [
        '**/*.js'
      ]
    });

    let addon = this.addons.find(addon => addon.name === 'ember-cli-babel');
    reduxSagaTree = addon.transpileTree(reduxSagaTree, {
      babel: {
        plugins: ['transform-object-rest-spread']
      },
      'ember-cli-babel': {
        compileModules: false
      }
    });

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
