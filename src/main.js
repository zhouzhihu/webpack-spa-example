$('#button').click(() => {
  require.ensure([], function (require) {
    var hello = require('./modules/hello').default
    $('#app')[0].appendChild(hello())
  })
})
