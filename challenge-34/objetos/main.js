(function() {
  'use strict';

  var a = {
    prop: '1'
  };

  var b = a;
  b.prop2 = '2';

  console.log( a === b );

})();

// Só adicionar variável globa se for necessário.

// O uso de ponto e vírgula não é obrigatório porque o JS é adicionado, se usar o Browserify ele remove espaçoes e ponto e vírgulas.