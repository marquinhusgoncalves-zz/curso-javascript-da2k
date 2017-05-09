(function() {
    "use strict";

    var $div = document.querySelector('[data-js="main"]');
    var $textarea = document.querySelector('[data-js="textarea"]');
    var $form = document.querySelector('[data-js="form"]');

    $form.addEventListener('submit', function(e) {
        e.preventDefault();
        $div.innerHTML = $textarea.value;
    });
})()
