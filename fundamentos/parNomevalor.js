//par Nome/Valor
const saudacao = 'Olá, jovem gafanhoto' //Chamado de contexto Léxico 1 

function exec(){
    const saudacao = 'Falaaa, meu jovem gafanhoto!' //Contexto Léxico 2
    return saudacao
}


//Objetos são grupos aninhados de  pares Nome/Valor
const cliente ={
    nome: 'Iago Sousa',
    idade: 22,
    peso:67,
    edereco:{
        logradouro:'Rua Princesa Isabel, 1E',
        numero: 1
    }
}


console.log('Saudacao por fora =',saudacao);
console.log('Saudação dentro da Função=',exec());
console.log(cliente);