//* Gerador de numero da mega sena
function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max]//Invertendo valores. De um lado destructuring e de outro lado array
    
    return new Promise((resolve, reject) =>{
        const fatorMutiplicacao = max - min + 1
        const aleatorio = parseInt(Math.random() * fatorMutiplicacao ) + min
        if(numerosProibidos.includes(aleatorio)){
            // Se tiver numeros aleatorios, vai rejeitar a promessa
            reject('Número Repetido')
        }else{
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}  

async function gerarMegaSena(qtdeNumeros, tentativas = 1){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            // Await é dentro de push pq ele gera o numero q retorna a promisse
            numeros.push(await gerarNumerosEntre(1, 60, numeros)) // primeiro ele espera gerar para depois colocar no array
        }
            return numeros
    }catch(e){
        if(tentativas > 10000){
            throw "Não deu certo!!"
        }else{
            return gerarMegaSena(qtdeNumeros, tentativas + 2)
        }
    }
    
}

gerarMegaSena(25)
.then(console.log)
.catch(console.log)