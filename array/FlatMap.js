const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome:'Gustavo',
        nota:9.1
    },{
        nome:'Marcus',
        nota:9.5
    }]
}, {
    nome: 'Turma M1',
    alunos:[{
        nome:'Rebeca',
        nota: 6.7
    },{
        nome:'Lucas',
        nota: 2.7
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);