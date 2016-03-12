const ov = require('object-view')

const real = {
  title: 'My Story',
  properties: {
    desc: 'A short description',
    nest: {
      ed: true
    }
  }
}

const view = {
  'title': 'label',
  'properties.some': 'description',
  'properties.nest.ed': 'available'
}

const obj = ov(view, real)
obj.label = 'Another story'
obj.description = 'A different description'
obj.available = false

real
