module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-saga', target: '0.13.0'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
