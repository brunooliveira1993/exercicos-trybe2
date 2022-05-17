// Definição de objetos
let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: { golden: 2, silver: 3 },
};

console.log('a jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade')
// "A jogadora Marta Silva tem 34 anos de idade".

// Adiciona elemento ao objeto
player['besteWinerWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]
console.log('a jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes' + '(' + player.besteWinerWorld + ')')
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// Acessando objeto dentro de objetos
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas  de prata.')
// "A jogadora possui 2 medalhas de ouro e 3 medalhas  de prata".


//  FOR/IN e FOR/OF
let food = ['hamburguer', 'bife', 'acarajé'];

// FOR/IN percorre o indice dos objetos
for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

// FOR/OF percorre o valor dos objetos 
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// -- exercicio 1 --
let lista = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let value in lista){
  console.log('Ola ' + lista[value])
}

// -- exercicio 2 --
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car){
  console.log(key + ': ' + car[key])
}

