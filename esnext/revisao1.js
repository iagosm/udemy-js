//* let e const

// Var tem dois escopo, escopo de função e global
// Let tem escopo de bloco

{
    var a = 2
    let b = 3
    console.log(b);
}
console.log(a) //B iria dar erro se tivesse fora do escopo

//* Template String
const produto = 'Ipad'
console.log(`${produto} é caro`);

//* Destructuring = tirar algo de um objeto/array/string. Pode desestruturar com destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, ...tras); //Esse sai o nome completo
console.log(l, e, tras); //Esse o "D3R" sai como array

const [x , , y] = [1 , 2, 3]
console.log(x , y)

const { idade: i, nome} = {nome:'Ana', idade:9}
console.log(idade, nome);