//Reduce : Transformar um array com um criterio, com um parametro que vai sendo acumulado de chamado em chamado

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false  },
    { nome: 'Marcos', nota: 4.7, bolsista: true  },
    { nome: 'Matheus', nota: 6.3, bolsista: false  },
    { nome: 'Guedes', nota: 6.7, bolsista: true  },
]

console.log(alunos.map( a => a.nota));
const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado);