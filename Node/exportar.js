console.log(module.exports)
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1 
exports.b = 2 
module.exports.c = 3 

exports = null
console.log(module.exports);


exports = {
    nome: 'Teste'
}

//This e o Exports são o mesmo objeto q o module.exports aponta

console.log(module.exports);

module.exports = {publico : true}