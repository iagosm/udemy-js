Array.prototype.map2 =  function(callback){
    //Criei um Array Vazio
    const newArray = []
    //Percorri o array original utilizando For com o This.length
    for(let i = 0 ;i < this.length; i++){
        // Chamou o call back passando o indice, o elemento e o array
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//Retornar apenas o Preço dos produtos no carrinho

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado);