  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function(doc, win) {
  'use strict';

  function clickButton() {
    var clickButton = document.querySelector('button[type="submit"]');

    clickButton.addEventListener('click', function(e) {
      e.preventDefault();
      var msg = document.querySelector('[data-js="message"]');
      var inputCEP = document.querySelector('input[type="text"]');
      var cep = cleanInputCEP(inputCEP);
      msg.innerHTML = 'Buscando informações para o CEP ' + cep + '...';
      getAjaxresponse(cep);
      msg.innerHTML = '';
    });
  }

  function maskInputCEP() {
    var cleanInputCep = document.querySelector('input[type="text"]');
    cleanInputCep.addEventListener('keyup', function() {
      cleanInputCep.value = cleanInputCep.value.replace(/[^0-9\-]/, '');
      if(cleanInputCep.value.length === 5) {
        cleanInputCep.value += '-';
      }
    });
  }

  function cleanInputCEP(string) {
    return string.value.replace(/-/g, '');
  }

  function readData(data) {
    document.querySelector('#logradouro').innerHTML = data.logradouro;
    document.querySelector('#bairro').innerHTML = data.bairro;
    document.querySelector('#uf').innerHTML = data.uf;
    document.querySelector('#localidade').innerHTML = data.localidade;
    document.querySelector('#cep').innerHTML = data.cep;
  }

  function getAjaxresponse(cep) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    xhr.onload = function() {
      if (xhr.status === 200) {
        readData(JSON.parse(xhr.responseText));
      }else {
        console.log('Não encontramos o endereço para o CEP ' + cep + '.');
      }
    };
    xhr.send();
  }

  function init() {
    clickButton();
    maskInputCEP();
  }

  init();

})(document, window);