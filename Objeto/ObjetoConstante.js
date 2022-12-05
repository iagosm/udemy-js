// pessoa -> 123 -> {...}
const pessoa = { nome:'Iago' }
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa -> 456 -> {...}
//Não pode atribuir novamente em pessoa pq é uma constante
// pessoa = { nome:'Ana' } 
// console.log(pessoa);

//metodo que está congelando um objeto. Se está congelado, vc n consegue mexer mais no objeto
Object.freeze(pessoa) // Com o freeze vc transforma o objeto em constante e não conseguira ser mexido, deletado.
pessoa.nome = 'Maria'
pessoa.end = 'Rua Abc'
delete pessoa.nome
console.log(pessoa.nome); //Logo aqui não irá dar resultado diferente de 'Pedro'
console.log(pessoa.end);//Irá dar undefined pq está congelado

const pessoaConstante = Object.freeze({nome:'Joao'})
console.log(pessoaConstante);
  