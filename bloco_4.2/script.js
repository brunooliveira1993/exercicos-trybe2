// -- exercicio 1 --

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for(let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index]
}

soma = soma / numbers.length
if (soma > 20){
    console.log('Maior que 20')
}else{
    console.log("Menor que 20")
}

// -- exercicio 2 --

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
let comparador = 0;
for (let index = 0; index < numbers.length; index += 1){
    comparador = numbers[index]
    if (comparador > maiorValor){
        maiorValor = comparador;
    };
};
console.log(maiorValor)

// -- exercicio 3 --

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0;
let contador = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
        numeroImpar = numbers[index];
        console.log(numeroImpar)
    }else{
    }
}
if(numeroImpar = 0){
    console.log('nenhum numero impar encontrado')
}

// -- exercicio 4 --

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 1000;
let comparador = 0;
for (let index = 0; index < numbers.length; index += 1){
    comparador = numbers[index]
    if (comparador < menorValor){
        menorValor = comparador;
    };
};
console.log(menorValor)

// -- exercicio 5 --

let numeros = []
for (let index = 0; index <= 25; index+=1){
    numeros.push(index)
};

for (let indexDivisao = 0; indexDivisao < numeros.length; indexDivisao += 1){
    console.log(indexDivisao / 2)
}

// -- FIM --