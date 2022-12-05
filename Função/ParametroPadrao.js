// estrategia 1 para gerar valor padrao
//A mais famosa é essa
function soma1(a, b, c){
    a = a || 1 // a = a ||(ou) 1 
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(2,2,2));
console.log(soma1(3));
console.log(soma1(0,0,0));

//estrategia 2 , 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 //Se a for diferente de undefined, ele vai assumir o valor 1 
    b = 1 in arguments ? b : 1 //Dentro de arguments, existe o indice 1 ? Se existir, pegue o valor b ou o valor padrão 1
    //Opção C é a mais segura
    c = isNaN(c) ? 1 :c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0, 0,0));

//valor padrao do es2015
//Se for para escolher alguma forma de parametro padrão, escolha essa por ser a mais nova
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(),soma3(3), soma3(1,2,3), soma3(0,0,0));