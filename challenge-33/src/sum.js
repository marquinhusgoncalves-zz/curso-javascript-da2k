'use stricts';

function sum(num1, num2) {
  if( !num1 || !num2 ) {
    return new Error('Passe 2 números por parâmetro');
  }
  return num1 + num2;
}

module.exports = sum;