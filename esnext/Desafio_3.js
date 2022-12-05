const fs = require('fs')
const path = require('path')



function lerArquivo(caminho){
    return new Promise(function(resolve){
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => `O valor final é: ${conteudo}`)
.then(console.log)