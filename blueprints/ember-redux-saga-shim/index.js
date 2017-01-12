module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-saga', target: '0.14.2'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
