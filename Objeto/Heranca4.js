//*Função e o atributo prototype da função
//Quando vc cria um objeto a partir da função construtora. O prototipo desse objeto aponta pra função.__proto__
function meuObjeto(){}
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObjeto.prototype === obj1.__proto__);

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia!! Meu nome é ${this.nome}`);
}

obj1.falar()

obj2.nome = 'Rafael Santos'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//*Resumindo a loucura
console.log((new meuObjeto).__proto__ === meuObjeto.prototype);// 
console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // Atributo existe mas n aponta pra nada

//* Quando se cria um objeto a partir de uma função, o objeto criado tem o prototipo dele apontando para funçãõ.prototype 