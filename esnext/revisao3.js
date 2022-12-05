//* ES:8 Object.values/Object.entries
// Object.values pega os valores de um objeto
// Object.entries = Chave/valor. Um array de outros arrays que da uma matriz. com varios arrays
const obj = {a: 1,b: 2, c:3}
console.log(Object.values(obj))
// Entries acaba enviando uma Matriz = Um array de arrays
console.log(Object.entries(obj))

//  Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    // Em vez de ter q colocar "nome=nome". Ele ja cria um valor com o mesmo atributo
    nome,
    idade:23,
    tamanho:2.10,
    //* Antes a função teria q escrever :function. Agora só precisa digitar o nome
    // *Antes* ola:function(){}
    ola(){
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//*Class = Internamente no Javascript é convertida para uma função.
class Animal{}//Classe Vazia!
// Forma usando a sintaxe de classe para ter herança. Mas no fim acaba sendo herança por prototipo
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
// Criar objetos apartir de uma classe usamos a palavra "New"
console.log(new Cachorro().falar())