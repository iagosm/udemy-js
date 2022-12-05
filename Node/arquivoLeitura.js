const { log } = require('console');
const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// ler de forma sincrona
// N é recomendado pois pode travar o event loop se for grande
 const conteudo = fs.readFileSync(caminho,'utf-8')  
console.log(conteudo);

//Assincrona ...
fs.readFile(caminho,'utf-8',(err, conteudo) =>{
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
})

// o De cima foi executado por ultimo pois está de forma assincrona
// O de baixo executou antes do readfile, logo saiu primeiro
const config = require('./arquivo.json')
console.log(config.db);

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteudo da Pasta...');
    console.log(arquivos);
})

// __dirname é uma constante que está presente em todos os arquivos/modulos do node que representa o diretorio atual