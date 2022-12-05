// BackEnd basico de form
const express = require('express') // importar o express
const app = express() //instanciar o express e associar a variavel app
const bodyParser = require('body-parser') //import do body-parser
// BodyParser vai fazer um parser no corpo do request

// Associando o appuse ao bodyparser
app.use(bodyParser.urlencoded({extended:true})) //Extremamente importante pois vai pegar o elemento e transformar em objeto

// Parser do url post
app.post('/usuarios',(req, resp)=>{
    console.log(req,resp)
    resp.send('<h1>Parabéns, Cadastrado!</h1>')
})

app.post('/usuarios/:id',(req, resp)=>{
    console.log(req, params.id);
    console.log(req,resp)
    resp.send('<h1>Parabéns, Usuario Alterado!!</h1>')
})

app.listen(3003)