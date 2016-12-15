/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function() {
  'use strict';

var $ce = document.querySelector( 'button[name="ce"]' );
var $zero = document.querySelector( 'button[name="zero"]' );
var $one = document.querySelector( 'button[name="one"]' );
var $two = document.querySelector( 'button[name="two"]' );
var $three = document.querySelector( 'button[name="three"]' );
var $four = document.querySelector( 'button[name="four"]' );
var $five = document.querySelector( 'button[name="five"]' );
var $six = document.querySelector( 'button[name="six"]' );
var $seven = document.querySelector( 'button[name="seven"]' );
var $eight = document.querySelector( 'button[name="eight"]' );
var $nine = document.querySelector( 'button[name="nine"]' );
var $sum = document.querySelector( 'button[name="sum"]' );
var $sub = document.querySelector( 'button[name="sub"]' );
var $div = document.querySelector( 'button[name="div"]' );
var $mult = document.querySelector( 'button[name="mult"]' );
var $equal = document.querySelector( 'button[name="equal"]' );

$ce.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value = 0;
} )
$zero.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 0;
} )
$one.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 1;
} )
$two.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 2;
} )
$three.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 3;
} )
$four.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 4;
} )
$five.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 5;
} )
$six.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 6;
} )
$seven.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 7;
} )
$eight.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 8;
} )
$nine.addEventListener( 'click', function( event ) {
  document.querySelector( 'input[name="visor"]' ).value += 9;
} )
$sum.addEventListener( 'click', function( event ) {
} )
$sub.addEventListener( 'click', function( event ) {
} )
$div.addEventListener( 'click', function( event ) {
} )
$mult.addEventListener( 'click', function( event ) {
} )
$equal.addEventListener( 'click', function( event ) {
} )

})();