(function(win) {
  'use strict'

  function init() {
    console.log('Hey');
  }

  init();
  window.init = init;
})(window);
