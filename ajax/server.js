const bodyParser = require('body-parser')//esse é responsavel por fazer o parser da requisição.
const express = require('express')
const app = express()

// Definindo o Middleware que serão aplicados sempre q houver requisição
app.use(express.static('.'))//Dentro da pasta atual que o server.js está, sirva os arquivos estaticos
app.use(bodyParser.urlencoded({extended: true}))//algum formato de um formulario, esse codigo vai ler e transformar em objeto
app.use(bodyParser.json())// Se vier Json, isso ira transformar em objeto

const multer = require('multer')

//configurar a pasta q vc vai salvar e personalizar o arquivo salvo
const storage = multer.diskStorage({
 destination: function(req,file,callback){
    callback(null, './upload')
 },
 filename: function(req, file, callback){
    callback(null, `${Date.now()}_${file.originalname}`)
 }
})

// vai receber um arquivo da requisição com nome arquivo
const upload = multer({ storage }).single('arquivo')

//via post a requisição para fazer o upload
app.post('/upload', (req, res) =>{ 
    upload(req,res , err =>{
        if(err){
            return res.end('Ocorreu um erro.')
        }//caso erro esteja vazio, vai chamar res.end
        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req,res) =>{
    res.send({
        ...req.body,
        id:1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero)  % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// app.get('/teste',(req,res) => res.send('Ok'))
app.listen(8081, () => console.log('Executando ...'))
