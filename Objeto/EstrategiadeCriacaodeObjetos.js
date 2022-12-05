//usando a notação literal  
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//Funções construtoras. Mesma forma que a segunda forma porém é uma função sua
function Produto(nome,preco, desc) {
    //quando utiliza let ou const, fica visivel apenas no bloco
    this.nome = nome//quis tornar essa variavel publica. Está visivel fora do objeto
    this.getPrecoComDesconto = () => {
        return nome + 'R$:' + preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta ', 7.99, 0.15)
const p2 = new Produto('Smartphone ', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto());

//Função Factory
//Pode ser feita com anotação literal ou uma função construtora interna
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 5)
const f2 = criarFuncionario('Maria Almeida', 11400,11)
console.log(f1.getSalario(),f2.getSalario());

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

//Uma função famosa que retorna Objeto ...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info);