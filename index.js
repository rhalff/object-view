'use strict'

var dotob = require('dot-object')()

function defineProp (k, view, obj, shim) {
  var p = k.split('.') // pick
  var prop = p.pop()
  var subject = p.length ? dotob.pick(p.join('.'), obj) : obj
  Object.defineProperty(shim, view[k], {
    enumerable: true,
    get: function () {
      return subject[prop]
    },
    set: function (value) {
      subject[prop] = value
    }
  })
}
module.exports = function ObjectView (view, obj) {
  var k
  var shim
  shim = Object.create(obj.prototype || {})
  for (k in view) {
    if (view.hasOwnProperty(k)) {
      defineProp(k, view, obj, shim)
    }
  }
  return shim
}
