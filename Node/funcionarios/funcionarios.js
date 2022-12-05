const url = 'http://files.cod3r.com.br/cursos-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);
})

//função para filtrar todos os chineses que estão dentre os 500 funcionario

//Função que vai filtrar todas as mulheres

//mulher chinesas com menor salario
const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
console.log(func);