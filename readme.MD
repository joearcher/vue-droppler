# Droppler
## A super simple Vuejs2 dropdown component using drop.js

Droppler is a Vue 2 component for creating fixed position "dropdown" content using [drop.js](https://github.com/HubSpot/drop).

Droppler supports all of the options for drop.js.

## Installation

```bash
npm install vue-droppler
```

## Use

Register droppler as a global component:
```javascript
Vue.component('droppler', require('vue-droppler'));
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

### Basic example

```javascript

<droppler>
    <button slot="drop-trigger">Click me</button>
    <div slot="drop-content">
        Some content for the dropdown.
    </div>
</droppler>
```

### Options
Here is the options object with default values. Any of these can be passed to droppler using a property.

For more information about these options, have a look at the [drop.js documentation](http://github.hubspot.com/drop/)

```javascript
{
    position: 'bottom left',
    openOn: 'click',
    classes: 'drop-theme-basic',
    constrainToWindow: false,
    constrainToScrollParent: false,
    hoverOpenDelay:  0,
    hoverCloseDelay:  50,
    focusDelay:  0,
    blurDelay: 50,
    tetherOptions: {}
}
```

### Example with options

```javascript
<droppler position="top right" openOn="hover" constrainToWindow="true">
    <button slot="drop-trigger" href="#">Click me</button>
    <div slot="drop-content">
        Some content for the dropdown.
    </div>
</droppler>
```

## License
Copyright &copy; 2017 Joe Archer - [MIT License](LICENSE)
