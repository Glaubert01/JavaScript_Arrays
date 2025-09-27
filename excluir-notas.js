const notas = [10, 6.5, 8, 7.5];
notas.pop(); // remove o ultimo elemento do array

const media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(`A média é ${media.toFixed(2)}`);
