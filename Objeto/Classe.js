//Uma estrutura semelhante a uma classe. Ela é um detalhe de sintaxe pois uma classe é convertida em uma função.
class Lancamento{ //Lançamento financeiro, salario e coisas do tipo
    constructor(nome = 'Genérico', valor = 0){//função que é chamada assim q essa classe for instanciada usando operador NEW
        this.nome = nome
        this.valor = valor

    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }   
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario (){
        let valorConsolidade = 0
        this.lancamentos.forEach( l => {
            valorConsolidade += l.valor
        }) 
        return valorConsolidade
    }
}

const salario = new Lancamento('Salario', 2550)
const contadeLuz = new Lancamento('Luz', -20)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contadeLuz)

console.log(contas.sumario());