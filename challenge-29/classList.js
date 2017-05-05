var $div = document.querySelector('div');

//Retorna um array com as classes do elemento.
console.log($div.classList);

//Retorna um booleano da classe passada
console.log($div.classList.contains('container'));

//Adiciona uma classe
$div.classList.add('red');

//Remove uma classe
//$div.classList.remove('red');

$div.addEventListener('click', function() {
  this.classList.toggle('green');
});