let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)// This aponta para obj por causa do bind

// Será q o comportamento irá acontecer no arrowFunction?
// This não vai apontar mais para o global, pq essa função foi definda dentro de uma função no node(modulo)
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)// Não aponta para o global
comparaComThisArrow(module.exports)//true pq ta dentro do modulo node

comparaComThisArrow = comparaComThisArrow.bind(obj)// ela vai dar false pq a arrow function tem mais "força"
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)