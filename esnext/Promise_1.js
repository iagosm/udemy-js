// Algo que irá resolver no futuro
// Para criar um dado, precisamos passar uma função como parametro para Promise
// Promise tem apenas um valor. Apenas criando um Objeto para dar mais de um resultado


// Como acessar o valor 3 que foi gerado? Com o metodo Then
// Then tbm é um metodo que recebe função como parametro
// p.then(function(valor){
// // Valor passado vai ser o valor cumprido
//     console.log(valor)
// })

const primeiroElemento =array =>array[0]

const primeiraLetra = string =>string[0]

const letraMinuscula = letra => letra.toLowerCase()

// * Transformando em Arrow Function

new Promise(function(resolve){
    resolve(['Iago','Matheus','Samuel','Luis'])
})
.then(primeiroElemento)// chamou primeiro elemento
.then(primeiraLetra) // pegou a primeira letra
.then(letraMinuscula) //transformou em minuscula
.then(console.log) //jogou no console log