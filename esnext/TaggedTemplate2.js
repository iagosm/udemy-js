// Função que vai fazer um parse em todas as variaveis interpoladas e aplicar dinheiro em cima delas
function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        //  Se não for um valor, aplique valor dentro da String
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    }) 
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)