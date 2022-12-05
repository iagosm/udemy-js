// IIFE --> Immediately Invoked Function Expression
// IIFE .Uma função auto invocada, uma função sem nome.


//Padrão muito utilizado para fugir do escopo Global e ser executado assim que o script for lido
(function(){
    console.log('Será executado na hora!');
    console.log('Fugindo do escopo mais abrangente!');
})// Será chamado com ()

