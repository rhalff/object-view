var so = require('./index');

var real = {
  title: 'My Story',
  properties: {
    some: 'thing',
    nest: {
      ted: true
    }
  }
};

var view = {
  'title':               'label',
  'properties.some':     'description',
  'properties.nest.ted': 'available'
};

var shim = so(view, real);
function test() {
  console.log(shim.label       === real.title);
  console.log(shim.description === real.properties.some);
}
// deletion will not really work I guess. undefined is enough
test();
shim.label = 'HI!';
test();
