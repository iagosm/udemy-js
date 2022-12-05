//* Arrow Function
//Quando é apenas um unico paremetro, não precisa colocar o parenteses
const soma = (a, b) => a + b
console.log(soma(1,2))

//* Arrow Function (this). 
// Numa função normal, o this aponta para global.
const lexico1 = () => console.log(this === exports)//This sempre aponta para exports
const lexico2 = lexico1.bind({})
lexico1()
lexico2()// vai apontar para o exports

// Parametros Default
function log(texto = 'Node'){
    console.log(texto)
}
// Como não foi informado o valor, ele assumirá o valor padrão
log('Sou mais forte')

// Operador Rest = Agrupar varios parametros em um Array
function total(...numeros){
    let total = 0
    // Atribuição aditiva em cima da variavel total para cada um dos elementos chamados numeros
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))//A soma de todos os numeros
