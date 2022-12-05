// gerar um numero entre dois numeros
function gerarNumerosEntre(min, max){
    if(min > max){
        [max, min] = [min, max]//Invertendo valores. De um lado destructuring e de outro lado array
    }
    return new Promise(resolve =>{
        const fatorMutiplicacao = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fatorMutiplicacao ) + min
        resolve(aleatorio)
    })
} 

gerarNumerosEntre(1,60)
.then(num => num * 10)
.then(numX10 => `O número gerado foi ${numX10}`)
.then(console.log)