const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeNotasEAlunos = [alunos, medias];

function exibeNomeNota(aluno) {
  if (listaDeNotasEAlunos[0].includes(aluno)) {
    const indice = listaDeNotasEAlunos[0].indexOf(aluno);
    const nota = listaDeNotasEAlunos[1][indice];
    console.log(`${aluno} tem a nota ${nota}`);
  } else {
    console.log("Aluno não cadastrado");
  }
}

exibeNomeNota("Juliana");
exibeNomeNota("Ana");
exibeNomeNota("Felipe");
