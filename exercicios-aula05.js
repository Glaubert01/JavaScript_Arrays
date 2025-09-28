// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

function unirArrays(...arrays) {
  return arrays.flat();
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const resultado = unirArrays(array1, array2, array3);
console.log(resultado); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [10, 20, 30, 40, 50];

const soma = valores.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
);
console.log(soma); // Saída: 150

// 3 - Considere duas listas de cores:

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ["Vermelho", "Verde", "Azul", "Amarelo", "Vermelho"];

const coresLista2 = ["Laranja", "Verde", "Roxo", "Azul"];

const listaUnida = [...new Set([...coresLista1, ...coresLista2])];

console.log(listaUnida); // Saída: ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Laranja', 'Roxo']

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}
const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numerosArray);
console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function filtrarMultiplosDe3EMaioresQue5(numeros) {
  return numeros.filter((numero) => numero % 3 === 0 && numero > 5);
}
const numerosArray2 = [1, 3, 6, 9, 12, 15, 18, 20];
const resultadoFiltrado = filtrarMultiplosDe3EMaioresQue5(numerosArray2);
console.log(resultadoFiltrado); // Saída: [6, 9, 12, 15, 18]

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somarElementos(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
const numerosArray3 = [5, 10, 15, 20];
const somaTotal = somarElementos(numerosArray3);
console.log(somaTotal); // Saída: 50
