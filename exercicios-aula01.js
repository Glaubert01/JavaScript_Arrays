//1)Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

// Array denso seria: [0, 5, 0, 0, 3, 0, 0, 7]
const sparseArray = [];

sparseArray[1] = 5;
sparseArray[3] = 3;
sparseArray[7] = 7;

console.log("Array esparso:", sparseArray);
console.log("Comprimento do array esparso:", sparseArray.length);

//2)Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const array = [1, 2, 3, 4, 5];
console.log("Array antes da alteração:", array);
array[0] = 10;
console.log("Array depois da alteração:", array);

//3)Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const meuArray = [];
meuArray.push(4);
meuArray.push(8);
meuArray.push(15);
console.log("Array após adição dos números:", meuArray);
meuArray[0] = meuArray[0] * 2;
console.log("Array após dobrar o primeiro elemento:", meuArray);

//4)Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

const numeros = [];
numeros.push(12);
numeros.push(24);
numeros.push(36);
console.log("Array após adição dos números:", numeros);

//5)Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
