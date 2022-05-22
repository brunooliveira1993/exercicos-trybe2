//  -- Exercicios 1 --
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// console.log('Bem-vinda ' + personagem + '!')

info['recorrente'] = 'Sim'

for (let key in info){
    console.log(info[key])
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

//  -- Exercicios 2 --
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
//   "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama' + leitor.livrosFavoritos[0].titulo + '.')

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })

//   console.log(leitor.livrosFavoritos[1])
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')

//  -- Exercicios 2 FUNÇÕES --
function verificacaoDePalindromo (palavra){
  entrada1 = palavra.split('');
  entrada2 = entrada1.reverse();
  entrada3 = entrada2.join('')
  if(entrada3 === palavra){
  return true
}else{
  return false
}
}
console.log(verificacaoDePalindromo('novo'));

//  -- Exercicios 3 FUNÇÕES --
let resultado = 0
function numerosInteiros (array)
for (index = 0; index < array.length; index += 1){
  if( array[index] > resultado)
  resultado = array[index]
  for (key if array)
  if ( ressultado === array(key))
  return array(key)
}
let numeros = [2, 3, 6, 7, 10, 1]
console.log(numerosInteiros (numeros))