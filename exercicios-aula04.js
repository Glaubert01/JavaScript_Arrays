// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const arrayExemplo = [10, 20, 30, 40, 50];

arrayExemplo.forEach((elemento, indice) => {
  console.log(`Índice: ${indice}, Elemento: ${elemento}`);
});

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, operacao) {
  array.forEach((elemento) => {
    const resultado = operacao(elemento);
    console.log(`Resultado da operação: ${resultado}`);
  });
}

// Exemplo de uso da função executaOperacaoEmArray
const numeros = [1, 2, 3, 4, 5];
const dobrar = (num) => num * 2;
executaOperacaoEmArray(numeros, dobrar);

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numerosArray = [5, 10, 15, 20, 25];
const numeroProcurado = 2;
const indiceEncontrado = numerosArray.indexOf(numeroProcurado);

if (indiceEncontrado !== -1) {
  console.log(
    `Número ${numeroProcurado} encontrado no índice: ${indiceEncontrado}`
  );
} else {
  console.log(`Número ${numeroProcurado} não encontrado. Retornando: -1`);
}

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = ["João Silva", "Maria Santos", "Pedro Almeida"];

const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = "Ana Souza";
const alunoEncontrado = todasAsTurmas.find((aluno) => aluno === alunoProcurado);
if (alunoEncontrado) {
  console.log(`Aluno encontrado: ${alunoEncontrado}`);
} else {
  console.log("Aluno não encontrado.");
}

// 5 - Considere um array de números inteiros.
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const numeros2 = [6, 9, 12, 15, 18, 21];
numeros2.forEach((num) => {
  const resultado = num * 3;
  console.log(`Resultado da multiplicação por 3: ${resultado}`);
});

const indice18 = numeros2.findIndex((num) => num === 18);
console.log(`Índice do número 18 no array original: ${indice18}`);
