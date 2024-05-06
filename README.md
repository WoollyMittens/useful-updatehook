# updatehook.js: Handle document updates

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Add handlers to document updated.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/updatehook.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/updatehook.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/updatehook.js'
], function(updatehook) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {informer} from "js/updatehook.js";
```

## How to start the script

```javascript
new UpdateHook({
	'container': document.body,
	'properties': { ... }
});
```

**'container' : {DOM element}** - Optionally restrict the container that will be watched.

**'properties' : {Object}** - Optionally restrict the [type of changes](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) that will be recorded.

```javascript
myElement.addEventListener('updated', function(evt) {
	...
});
```

**'myElement' : {DOM element}** - An element inside the container to apply the event handler too.

## How to control the script

### Kill

```javascript
updateHook.kill();
```

Stop reporting changes.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary www server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
