# Droppler
## A super simple Vuejs2 dropdown component using drop.js

Droppler is a Vue 2 component for creating fixed position "dropdown" content using [drop.js](https://github.com/HubSpot/drop).

Droppler supports all of the options for drop.js.


register droppler as a global component:
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
