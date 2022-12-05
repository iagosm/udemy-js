function esperarPor(tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout (() => resolve(), tempo)
    })
}

esperarPor(2000)
.then(() => console.log('Executando Promise 1...'))
.then(esperarPor)
.then(() => console.log('Executando Promise 2...'))
.then(esperarPor)
.then(() => console.log('Executando Promise 3...'))

// Como fazer o mesmo codigo usando Async Await

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000) //retorna 10 depois que passa 5 segundos
            
        })
    }

//* Codigo Sincrono
async function executar(){
    let valor = await retornarValor()

    await esperarPor(2000)
    console.log(`Async/Await ${valor}`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 3}`)

    return valor + 5
}

async function retornarValorRapido(){
    return 200
}

executar()
//* Para mostrar o "return valor + 5"

executar().then(console.log)