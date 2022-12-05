function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 1)
.then(v => console.log(`Valor: ${v}`))
// forma de tratar
.catch(err => console.log(`Erro: ${err}`))
// Pode colocar o .then dps cath mas n irá funcionar mais nd
.then(() => console.log('Fim!'))