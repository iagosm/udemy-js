let dobro = function (a){
    return 2 * a
}
//Reescreve como arrow
dobro = (a) => {return 2 * a}
//A mesma função porém reduzida pela arrow function
//forma reduzida se tiver apenas um unico parametro, pode usar o fato de tirar a chaves pq tem o retorno implicito
//Usado quando tem funções de uma unica linha
dobro = a => 2 * a//Returno implicito
console.log(dobro(Math.PI));


let ola = function(){
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olaá' // possui um parametro
console.log(ola());