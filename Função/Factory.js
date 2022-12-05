//Função Factory é uma função que retorna um objeto. Por isso o nome factory(fabrica)
//Factory Simples
function criarPessoa(){
    return {
        nome: 'Iago',
        idade:23,
        altura: 1.68 ,
        data: '30/06/2000'
    }
}

console.log(criarPessoa());


