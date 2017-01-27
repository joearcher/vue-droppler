# Droppler
## A super simple Vuejs2 dropdown component using drop.js

Droppler is a Vue 2 component for creating fixed position "dropdown" content using [drop.js](https://github.com/HubSpot/drop).

Droppler supports all of the options for drop.js.

### Installation

```bash
npm install vue-droppler
```

### Use

Register droppler as a global component:
```javascript
var droppler = require('droppler');
Vue.use(droppler);
```

or use it in a single component:

```javascript
var Droppler = require('droppler');

...
components: {
    'droppler': Droppler
}
...
```

To create a basic drop down:

```javascript

<droppler>
    <button slot="drop-trigger" href="#">Click me</button>
    <div slot="drop-content">
        Some content for the dropdown.
    </div>
</droppler>
```

### Options
Here is the drop.js options object with default value. Any of these can be passed to droppler using a property.

```javascript
{
    position: 'bottom left',
    openOn: 'click',
    classes: 'drop-theme-basic',
    constrainToWindow: true,
    constrainToScrollParent: true,
    hoverOpenDelay:  0,
    hoverCloseDelay:  50,
    focusDelay:  0,
    blurDelay: 50,
    tetherOptions: {}
}
```

### Example

```javascript
<droppler position="top right" openOn="click" constrainToWindow="false">
    <button slot="drop-trigger" href="#">Click me</button>
    <div slot="drop-content">
        Some content for the dropdown.
    </div>
</droppler>
```
