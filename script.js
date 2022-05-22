// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let corpo = document.getElementById('corpo');

let titulo = document.createElement('h1');

titulo.innerText = 'Exercício 5.2 - JavaScript DOM';

corpo.appendChild(titulo);

// Adicione a tag main com a classe main-content como filho da tag body;

let meio = document.createElement('main');

meio.className = 'main-content';

corpo.appendChild(meio);
