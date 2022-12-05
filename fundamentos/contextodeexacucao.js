let a = 3

global.b =123
this.c=456
this.d = false
this.e = 'teste'

console.log(a);
console.log(this.a);
//Global dentro do node equivale ao objeto window
console.log(global.b);
console.log(this.c);
//this é igual a module.exports
console.log(module.exports.c);
console.log(module.exports === this);
//Dentro de node cada arquivo é um modulo diferente 
console.log(module.exports);


//Criando variavel maluca, sem var e let!
abc = 3 // Não faça isso em casa!
console.log(global.abc);

// module.exports = {e : 456, f:false, g:'teste'}