//Funções importantes que existem dentro do Object
const pessoa = {
    nome: 'Iago',
    idade:22,
    peso:'68KG'
}

//Logo abaixo veremos uma função do Object
//Função Keys irá pegar todas as chaves de um objeto. Já que uma função é feita de objeto chave/valor
console.log(Object.keys(pessoa));

//Também conseguimos pegar apenas os valores de um objeto.
console.log(Object.values(pessoa));

//Retorna uma lista resultando como array com todos os subarrays com chave/valor
console.log(Object.entries(pessoa));
//Podemos percorrer com arrays e foreach
Object.entries(pessoa).forEach(([chave,valor]) =>{ //Utilizando o Destructuring, desestruturando os elementos de um array
    console.log(`${chave}: ${valor}`);
})

//DefineProperty = Definir Propriedade de um Objeto. Pode definir se uma propriedade pode ou n ser alterada ao utilizar outras funções do object
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable : false,
    writable: false, //se colocar true, podemos modificar
    value: '01/01/2019'
})

pessoa.dataNascimento ='30/06/2000' //Já que é uma propriedade que não aceita ser escrita, será usado apenas o valor inicial pois dps disso ele freeza a variavel
console.log(pessoa.dataNascimento);
//Keys novamente para listar todas as chaves
console.log(Object.keys(pessoa));

//Object.assign = Ele pega o objeto que vai receber os atributos, e irá concatenar nos objetos que vc irá incluir
const dest = { a :1}
const o1 = { b :2}
const o2 = { c :3, a:4}
const obj = Object.assign(dest, o1, o2)
//O objeto gerado será a concatenação de todos os objetos
console.log(dest);

Object.freeze(obj) //Freezou e não será mexido
obj.c = 1234
console.log(obj);