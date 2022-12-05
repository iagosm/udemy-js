//*Herança é um principio da OO, que faz com que vc receba do seu "pai", atributos e comportamentes, reuse os codigos
//*Objetivo da Herança é criar mecanismos para que vc não precise usar o Ctrl C + Ctrl V
//*Sempre priorize a composição

const ferrari = {
    modelo: 'F40',
    velMax:324
}

const volvo = {
    modelo: 'V40',
    velMax:200
}
console.log(ferrari.prototype);// vai dar undefined pq o objeto n tem prototype
console.log(ferrari.__proto__);//a partir disso consigo acessar o prototipo. Que seria o OBJ PAI
console.log(ferrari.__proto__ === Object.prototype);// De fato, esse atributo representa o Object.prototype
console.log(volvo.__proto__);//a partir disso consigo acessar o prototipo. Que seria o OBJ PAI
console.log(volvo.__proto__ === Object.prototype);//a partir disso consigo acessar o prototipo. Que seria o OBJ PAI
console.log(Object.prototype.__proto__ === null);// é nulo

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);