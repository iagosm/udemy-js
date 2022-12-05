Array.prototype.filter2 = function(callback, thisArg){
    const newArray = []
    for(let i =0 ; i < this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook Dell',preco: 2590, fragil: true},
    {nome: 'Iphone 8',preco: 1490, fragil: true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico',preco: 18.99, fragil: false},
    {nome: 'Caixa de Produto',preco: 50.99, fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil));