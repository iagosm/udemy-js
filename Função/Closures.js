//Closures é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variaveis externas a função

//Contexto Léxico em Ação!!
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

//preciso criar minha função para aparecer o resultado do que tem na função dentro
const minhaFuncao = fora()

console.log(x);
console.log(minhaFuncao());