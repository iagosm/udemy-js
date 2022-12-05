console.log('a =',a)
var a = 2 
console.log('a =',a)
// O codigo leu basicamente assin =>
var a 
console.log('a =',a)
a = 2 
console.log('a =',a) 

//
function teste(){{
    console.log('a =',a)
    var a = 2 
    console.log('a =',a)
}}
teste()
console.log('a ='.a)

// Hoisting com LET

console.log('b= ',b) //irá dar erro nesse pq o b não foi inicializado, com o var não há problema.
let b = 23 
console.log('b= ',b)