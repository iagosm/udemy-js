//Função em JS é First-Class Object(Citizens)
// Higher-order function

//Criar Função de forma literal

function fun1(){
    // caso não retorne nada, a função volta como undefined.
}
console.log(fun1());

//Armazenar em uma variavel.
//
const fun2 = function (){}//função anonima atribuidada para uma variavel e apartir disso vc consegue referenciar a partir desa constante
console.log(fun2());
//Armazenar dentro de um array.
const array = [function(a,b){return a + b }, fun1, fun2]
console.log(array[0](2,3));

//Armazenar dentro de um atributo de objeto.
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar());

//Passar função como parametro 
function run(fun){
    fun()
}

run(function(){console.log('executando ...')})

//Uma função pode retornar/conter uma função.
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(23,20)(5)
const cincoMais = soma(2,3)
cincoMais(4)