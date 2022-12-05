
// setTimeout(function(){
//     console.log('Oi iago')

//     setTimeout(function(){
//         console.log('Olá Iago, sou eu pela segunda vez');
   
//         setTimeout(function(){
//             console.log('Olá Iago, sou eu pela terceira vez ...');
//         },1000)
//     },2000)
// },2000)

// * Transformando em Promise

function esperarPor(tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('Executando Promise 1')
            resolve()
        }, tempo)
    })
}

esperarPor(3000).then(() => esperarPor()).then(esperarPor)
