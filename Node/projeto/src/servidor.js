const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))//Qualquer requisção q vc faça, ele vai obrigatoriamente passar por esse middleware

//Get é uma forma de requisição
// Colocando use, sempre ira passar pela resposta
app.get('/produtos',(req, res, next) =>{
    res.send(bancoDeDados.getProdutos())//Vai ser convertido para JSON pelo metodo send
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req, res ,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco:req.body.preco
    })
    //retornar o produto como resposta
    res.send(produto)// JSON
})

app.put('/produtos/:id',(req, res ,next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco:req.body.preco
    })
    //retornar o produto como resposta
    res.send(produto)// JSON
})

app.delete('/produtos/:id',(req, res ,next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    //retornar o produto como resposta
    res.send(produto)// JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`);
})
