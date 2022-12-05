console.log(this === global); //o this não aponta pra global e sim para modules.exports
console.log(this === module);//This é um objeto q é a referencia de module.exports

console.log(this===module.exports);
console.log(this===exports);//Verdadeiro pq aponta para a mesma referencia do mesmo objeto



//*Dentro de uma função o This não aponta para o exports
//*Logo o this dentro de uma função aponta para Global
function logThis(){
    console.log('Dentro de uma funcao');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this ===  global);
}

logThis()
