//Forma de percorrer o Array com mais proposito
//Filter serve para Filtrar um Array para ter um subArray com quantidade menores

const produtos = [
    {nome: 'Notebook Dell',preco: 2590, fragil: true},
    {nome: 'Iphone 8',preco: 1490, fragil: true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico',preco: 18.99, fragil: false},
    {nome: 'Caixa de Produto',preco: 50.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 400
}));

let produtoFragil = produtos.filter(function(p){
    return p.preco > 400
});

let produtoCaro = produtos.filter(function(p){
    return p.preco > 400
});

let produtoBarato = produtos.filter(function(p){
    return p.preco > 400
});

console.log('Função do Produto Fragil', produtoFragil);
console.log('Função do Produto Caro' , produtoCaro);
console.log('Função do Produto Barato', produtoBarato);


//Maneira simples com arrow function

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 
const barato  = produto => produto.preco <= 100

console.log(produtos.filter(caro).filter(fragil));
