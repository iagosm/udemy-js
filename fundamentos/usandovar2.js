var numero = 1
function teste(){
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//Ele retornatria numero = 2 duas vezes se não estivesse dentro da função, pois var é algo global e apenas a função poderia esconder