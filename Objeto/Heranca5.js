//Os três são Função, TODA função tem um atributo PROTOTYPE
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//Para separar e inverter, dps junta-los novamente
String.prototype.reverse = function () {
    return this.split('').reverse().join('') //Vc acessa apartir do metodo this pois o metodo split vem do String
}

console.log('Escola Cod3r'.reverse());

//Para pegar a primeira Letra da Função
Array.prototype.first = function(){
    return this[0]
}

console.log([5,6,2,7,1,2].first());
console.log(['g','d','a','y','t','e'].first());

//Não faça isso
String.prototype.toString = function () {
    return 'Lascou Tudo'
}

console.log('Escola Cod3r'.reverse());