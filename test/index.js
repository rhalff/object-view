var ov = require('../index');
require('should');

var real = {
  title: 'My Story',
  properties: {
    some: 'thing',
    nest: {
      ed: true
    }
  }
};

var view = {
  'title': 'label',
  'properties.some': 'description',
  'properties.nest.ed': 'available'
};

describe('object-view', function () {

  it('properties should be accessible', function () {
    var v = ov(view, real);
    v.label.should.eql(real.title);
    v.description.should.eql(real.properties.some);
    v.available.should.be.true;
  });

  it('should be able to set properties', function () {
    var v = ov(view, real);

    v.label = 'New Label';
    v.label.should.eql(real.title);

    v.description = 'New Description'
    v.description.should.eql(real.properties.some);

    v.available = false;
    v.available.should.be.false;
    v.available.should.eql(real.properties.nest.ed);

    real.should.eql({
      title: 'New Label',
      properties: {
        some: 'New Description',
        nest: {
          ed: false
        }
      }
    })
  });

});
