// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(23, 3)
imprimirSoma(2)
imprimirSoma(234, 3, 4, 5, 6, 6, 7, 8,)

//Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))