var dotob = require('dot-object')();

module.exports = function ObjectView(view, obj) {
  var k;
  var shim;
  shim = Object.create(obj.prototype || {});
  for (k in view) {
    if (view.hasOwnProperty(k)) {
      (function() {
        var p = k.split('.').pop();
        var s = dotob.pick(k, obj);
        Object.defineProperty(shim, view[k], {
          enumerable: true,
          get: function() {
            return s;
          },
          set: function(value) {
            s = value;
          }
        });
      })();
    }
  }
  return shim;
};
