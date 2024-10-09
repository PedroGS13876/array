// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 5.5 },
    { nome: "Lucas", nota: 6.5 },
    { nome: "Maria", nota: 4 },
    { nome: "João", nota: 9 },
    { nome: "Carla", nota: 7 },
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Testando a função
const aprovados = filtrarAprovados(alunos);
console.log(aprovados);