//Map serve para fazer transformação do Array. é mapear um array para outro array do mesmo tamanho com dados transformados
const nums = [1,2,3,4,5]
//gerar um array com o dobro do valor dos elementos

// For com Proposito = MAP
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado);

// Tenho um array e chamo um map q vai gerar um map e isso vai se repetir
//Map n transforma o array atual, ele gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e =>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

 resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
 console.log(resultado);