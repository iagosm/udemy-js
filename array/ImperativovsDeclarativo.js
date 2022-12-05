const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
]


// *Codigo Imperativo 
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length);

//* Codigo Declarativo = Abordagem mais interessante  
//Declarativo vc se importa com o que tem que ser feito do que como tem q ser feito.
const getNota = aluno => aluno.nota 
const soma = (total, atual) => total + atual//Criterio de soma
//Solução
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);

// exemplo sql, é uma linguagem declarativa
//Select codigo, nome , email from clientes where ativo = 1 