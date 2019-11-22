/*
	Source:
	van Creij, Maurice (2019). "updatehook.js: Handle document updates", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
function UpdateHook(config) {

  // PROPERTIES

  this.detail = {
    'observer': null,
    'mutation': null
  };

  this.config = {
    'container': document.body,
    'properties': {
      'childList': true,
      'attributes': true,
      'attributeFilter': ['id', 'class', 'style'],
      'characterData': false,
      'subtree': true,
      'attributeOldValue': false,
      'characterDataOldValue': false
    }
  };

  for(var key in config) {
    this.config[key] = config[key];
  }

  // METHODS

  this.callback = function(mutationsList, observer) {
    // for every mutation
    for(var a = 0, b = mutationsList.length; a < b; a += 1) {
      // trigger the event of the target
      this.detail.observer = observer;
      this.detail.mutation = mutationsList[a];
      mutationsList[a].target.dispatchEvent(this.event);
    }
  };

  this.kill = function() {
    // stop observing
    this.observer.disconnect();
  };

  // EVENTS

  this.observer = new MutationObserver(
    this.callback.bind(this)
  );

  this.observer.observe(
    this.config.container,
    this.config.properties
  );

  this.event = new CustomEvent('updated', {
    'detail': this.detail
  });

}

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return UpdateHook });
if (typeof module != 'undefined') module.exports = UpdateHook;
