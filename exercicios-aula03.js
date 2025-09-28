//1) Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const frutas = ["maçã", "banana", "laranja", "uva"];
for (const fruta of frutas) {
  console.log(fruta);
}

//2) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function imprimirIndicesEElementos(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Índice: ${i}, Elemento: ${array[i]}`);
  }
}

const elementos = ["a", "b", "c", "d"];
imprimirIndicesEElementos(elementos);

//3) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function somarElementos(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = somarElementos(numeros);
console.log(`A soma dos elementos é: ${resultado}`);

//4) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

function encontrarMenorEMaior(array) {
  let menor = array[0];
  let maior = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return `O menor número é ${menor} e o maior número é ${maior}`;
}

const numeros2 = [7, 2, 9, 4, 1, 6];
const resultado2 = encontrarMenorEMaior(numeros2);
console.log(resultado2);

//5) Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros3 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for (let i = 0; i < numeros3.length; i++) {
  if (numeros3[i] % 2 === 0) {
    console.log(numeros3[i]);
  }
}

//6)  Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numeros4 = [4, 8, 15, 16, 23, 42];
let soma2 = 0;
for (let i = 0; i < numeros4.length; i++) {
  soma2 += numeros4[i];
}
const media = soma2 / numeros4.length;
console.log(`A média dos números é: ${media}`);
