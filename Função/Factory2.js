function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',1339.90));
console.log(criarProduto('iPad',1009.90));
console.log(criarProduto('Fone Bluetooth',339.90));