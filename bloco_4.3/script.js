// //  -- exercicio 1 --

let fatorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let resultado = 1
for (let index = 0; index < fatorial.length; index += 1){
    resultado = resultado * fatorial[index]
}
console.log(resultado)

// //  -- exercicio 2 --

// // for (let index = array.length-1; i >= 0; i -= 1)

let word = 'tryber';
let resultado =''
for (let index = word.length-1; index >= 0; index -= 1){
    resultado = resultado + word[index]
}
console.log(resultado)

// //  -- exercicio 3 --

let array = ['java', 'javascript', 'python', 'html', 'css'];
let resultado = 'a'
for(let index = 0; index < array.length; index += 1){
    if(array[index].length > resultado.length){
        resultado = array[index]
    }
}
console.log(resultado)

//  -- exercicio 4 --

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let numerosPrimos = [];
for(let indexImpar = 1; indexImpar < lista.length; indexImpar += 1){
    numerosPrimos.push(lista[indexImpar]);
    if(lista[indexImpar] % 2 === 0 && lista[indexImpar] > 3){
        numerosPrimos.pop(lista[indexImpar]);
    };
for(let indexPrimos = 0; indexPrimos < numerosPrimos.length; indexPrimos += 1){
    if(numerosPrimos[indexPrimos] % 3 === 0 && numerosPrimos[indexPrimos] > 3){
        numerosPrimos.pop(numerosPrimos[indexPrimos])
    };
for(let index = 0; index < numerosPrimos.length; index += 1){
    if(numerosPrimos[index] != 5 && numerosPrimos[index] % 5 === 0){
        numerosPrimos.pop(numerosPrimos[indexPrimos]);
    };
};
};
};
console.log(numerosPrimos);

//  -- FIM --