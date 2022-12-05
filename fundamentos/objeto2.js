console.log(typeof Object)
//No momento em que colocamos o "new" ou os (), instanciamos uma função 
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) // apartir de uma função vc pode instanciar uma função e ter suas proprias variaveis que pertencem aquela instancia