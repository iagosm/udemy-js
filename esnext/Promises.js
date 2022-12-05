//* Usa o Promises quando quer algum processamento Assincrono
// Utilizando Resolve
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3,'Que legal! Parabéns meu nobre. Estou no Resolve!').then(frase =>frase.concat('?!?')).then(outraFrase => console.log(outraFrase))

// Utilizando Reject
// Precisamos adicionar o catch no final

function falarDepoisDe1(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe1(3,'Que legal! Parabéns meu nobre. Estou no Reject').then(frase =>frase.concat('?!?')).then(outraFrase => console.log(outraFrase)).catch(e => console.log(e))
