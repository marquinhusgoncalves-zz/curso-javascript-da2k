(function() {
    "use strict";
    var $form = document.querySelector('[data-js="form"]');
    $form.addEventListener('submit', function(e) {
        e.preventDefault();
        $form.insertAdjacentHTML('afterend', '<h1>insertAdjacentHTML</h1>');
    });

    
})()

// Exemplos:

// elem.insertAdjacentHTML('beforebegi', '<h1>insertAdjacentHTML</h1>');

// elem.insertAdjacentHTML('beforeend','<h1>insertAdjacentHTML</h1>');

// elem.insertAdjacentHTML('afterbegin', '<h1>insertAdjacentHTML</h1>');

// elem.insertAdjacentHTML('afterend', '<h1>insertAdjacentHTML</h1>');