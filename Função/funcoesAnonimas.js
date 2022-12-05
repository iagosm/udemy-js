//Todas as funções abaixo são funções anonimas
const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}   

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
//Função anonima arrow
imprimirResultado(3,4, function(x,y){
    return x - y  
})

imprimirResultado(3,4, (x,y)=> x*y)

const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar()
//Também pode ser feito sem a function

const pessoa1 = {
    falar() {
        console.log('Opa1');
    }
}

pessoa1.falar()