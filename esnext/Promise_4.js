// gerar um numero entre dois numeros
function gerarNumerosEntre(min, max ,tempo){
    if(min > max){
        [max, min] = [min, max]//Invertendo valores. De um lado destructuring e de outro lado array
    }
    return new Promise(resolve =>{
        setTimeout(function() {
            const fatorMutiplicacao = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fatorMutiplicacao ) + min
            resolve(aleatorio)
        }, tempo)
    })
} 

// Gerar 10 numeros aleatorios

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('Promise')

gerarVariosNumeros()
.then(console.log)
.then(() =>{
    console.timeLog('promise')
    console.timeEnd('promise')
})

