var ov = require('../index');
require('should');

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

describe('object-view', function() {

  it('properties should be accessible', function() {
     var v = ov(view, real);
     v.label.should.eql(real.title);
     v.description.should.eql(real.properties.some);
     v.available.should.be.true;
  });

});
