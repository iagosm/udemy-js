// *Diferença entre Function Declaration e Expression*
// * A Declaration podemos usar em qualquer lugar pq já foi declarado. *

//function declaration
//x e y são os parametros
function soma(x, y){
    return x + y
}

//Function expression = declarar a função como anonima e atrubuir a uma constante
const sub = function(x , y ){
    return x - y
}

//Named Function Expressinon = Misturando as duas ideias anteriores. 
const mult = function mult(x,y){
    return x * y
}

console.log(soma(10,10));
console.log(sub(10,5));
console.log(mult(2,5));