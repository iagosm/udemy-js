//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log(a +b)
}

imprimirSoma(2,3)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) =>{
    return a + b
}

console.log(soma(22,22))

// retorno implícito

const subtracao = (a ,b) =>  a -b

console.log(subtracao(30, 7))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!!')