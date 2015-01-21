var dotob = require('dot-object')();

module.exports = function ObjectView(view, obj) {
  var k;
  var shim;
  shim = Object.create(obj.prototype || {});
  for (k in view) {
    if (view.hasOwnProperty(k)) {
      (function() {
        var p = k.split('.'); // pick
        var prop = p.pop();
        var subject = p.length ? dotob.pick(p.join('.'), obj) : obj;
        Object.defineProperty(shim, view[k], {
          enumerable: true,
          get: function() {
            return subject[prop];
          },
          set: function(value) {
            subject[prop] = value;
          }
        });
      })();
    }
  }
  return shim;
};
