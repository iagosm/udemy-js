const bodyParser = require('body-parser')//esse é responsavel por fazer o parser da requisição.
const express = require('express')
const app = express()

// Definindo o Middleware que serão aplicados sempre q houver requisição
app.use(express.static('.'))//Dentro da pasta atual que o server.js está, sirva os arquivos estaticos
app.use(bodyParser.urlencoded({extended: true}))//algum formato de um formulario, esse codigo vai ler e transformar em objeto
app.use(bodyParser.json())// Se vier Json, isso ira transformar em objeto

// app.get('/teste',(req,res) => res.send('Ok'))
app.listen(8081, () => console.log('Executando ...'))
