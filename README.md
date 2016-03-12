[![NPM](https://nodei.co/npm/object-view.png)](https://nodei.co/npm/object-view/)
[![Build Status](https://travis-ci.org/rhalff/object-view.png)](https://travis-ci.org/rhalff/object-view)

Object View
===========

Enables placing views/masks on top of an object.

The masked object can then be modified using the view's structure.
The source object itself is modified beneath it.

e.g.

Our source object
```javascript
const real = {
  title: 'My Story',
  properties: {
    desc: 'A short description',
    nest: {
      ed: true
    }
  }
}
```

The view describing how we would like our object to appear
```javascript
const view = {
  'title': 'label',
  'properties.some': 'description',
  'properties.nest.ed': 'available'
}
```

Apply the view to our object
```javascript
    const obj = ov(view, real)
```

Then `obj` now looks like:
```javascript
{
  "label":"My Story",
  "description":"A short description",
  "available":true
}
```

You can then assign new values to these properties, like so:
```javascript
  obj.label = 'Another story'
  obj.description = 'A different description'
  obj.available = false
```

Our initial source object will now look like
```javascript
{
  title: 'Another story',
  properties: {
    desc: 'A different description',
    nest: {
      ed: false
    }
  }
}
```

For objects with complex structures several different views can be created.
