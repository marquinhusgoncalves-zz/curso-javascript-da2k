/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?
(function( window, document ) {
  'use strict';

  var $buttonStart = document.querySelector( ' button[data-js="button-start"] ' );
  var $buttonStop = document.querySelector( 'button[data-js="button-stop"]' );
  var $buttonReset = document.querySelector( 'button[data-js="button-reset"]' );
  var $input = document.querySelector( ' input[type="text"] ' );
  var cron;
  var started = false;

  $buttonStart.addEventListener( 'click', function( event ) {
    event.preventDefault();
    if ( !started )
      cron = window.setInterval( startWatch, 1000 );
    started = true;
  } );

  function startWatch() {
    $input.value++;
  }

  $buttonStop.addEventListener( 'click', function( event ) {
    event.preventDefault();
    clearInterval( cron );
    started = false;
  } );

  $buttonReset.addEventListener( 'click', function( event ) {
    event.preventDefault();
    clearInterval( cron );
    $input.value = 0;
    started = false;
  } );

})( window, document );

// function timer() {
//     $input.value++;
//     window.setTimeout( timer, 1000)
//   }
// timer();
