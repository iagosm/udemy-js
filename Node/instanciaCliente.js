// Objeto exportado do node, por isso faz um cache e da o mesmo valor
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Novas instancias a partir de uma factory, por isso cada uma da o resultado diferente
const contadorC = require('./instanciaNova')()//Isso retorna um objeto
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor);
console.log();
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);