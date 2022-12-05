// Novo recurso do ES2016

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'Rua Princesa Isabel',
        numero:1
    }
}

const { nome, idade} = pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log('Nome:'+n+' idade:', i);

const { sobrenome, bemHumorada = true } = pessoa
console.log( sobrenome, bemHumorada );

const {endereco :{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);

// const{conta : {agencia. numero}} = pessoa  / Esse iá dar ero pq é algo q não existe e não está setado como objeto
// console.log(agencia, numero) ;