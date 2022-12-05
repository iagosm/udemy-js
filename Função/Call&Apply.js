//
function getPreco(imposto = 0, moeda = 'R$'){
    //this para pegar o 
   return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // vai criar um atributo e associar com a função getPreco
}


console.log(getPreco());// Irá resultar em NaN pois o this.desc e this.preco n está definido
console.log(produto.getPreco());

const carro = { preco: 1200, desc:0.20}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//*Diferença de call para Aplly
//Tipo call, passa diretamente nos parametros, cada um dos parametros q serão passados no contexto
console.log(getPreco.call(carro, 0.17, '$'));//sempre o primeiro é o contexto e o resto é o parametro que será passado

//*Apply os parametros podem ser passados diretamente dentro de um arry
console.log(getPreco.apply(carro ,[0.17, '$']));// Apply vc passa os parametros dentro de um arry