// JavaScript é uma linguagem dinamica e fracamente tipada
//Evitando Modificações
//Deixar menos flexivel

//* Object.preventExtensions = Não vai conseguir extender seu objeto, não vai adicionar novos atributos. Apenas excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag:'promo'
})
//Essa função testa se o objeto é extensivel
console.log('Extensivel:',Object.isExtensible(produto));

//Neste cenario vc consegue deletar e modificar mas não consegue adicionar
produto.nome = 'Borracha'
produto.preco = 20.99
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto);

//* Object.seal = é para selar o objeto. Voce n consegue adicionar novos atributos, excluir atributos. Mas consegue modificar os valores 
const pessoa = {nome:'Julia',idade:35}
Object.seal(pessoa)
//Verificar se o Objeto está selado
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome 
pessoa.idade = 29
console.log(pessoa);

//Object.freeze = Selado + Valores constantes = Não consegue fazer nada pois está freezado

