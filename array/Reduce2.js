const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false  },
    { nome: 'Marcos', nota: 4.7, bolsista: true  },
    { nome: 'Matheus', nota: 6.3, bolsista: false  },
    { nome: 'Guedes', nota: 6.7, bolsista: true  },
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas =  (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));


//Desafio 2: Algum aluno é Bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

