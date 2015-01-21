'use strict';

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
    v.available.should.eql(true);
  });

  it('should be able to set properties', function () {
    var v = ov(view, real);

    v.label = 'New Label';
    real.title.should.eql('New Label');

    v.description = 'New Description';
    real.properties.some.should.eql('New Description');

    v.available = false;
    real.properties.nest.ed.should.eql(false);
    
    v = null; // vanish

    real.should.eql({
      title: 'New Label',
      properties: {
        some: 'New Description',
        nest: {
          ed: false
        }
      }
    });
  });

});
