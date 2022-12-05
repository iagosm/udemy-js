//Coleção dinamica de pares chaves/valor
const produto = new Object // Forma de criar um objeto apartir do operador NEW
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo:'A4',
    valor: 89000,
    proprietario:{
        nome:'Iago',
        idade:56,
        endereco:{
            logradouro:'Rua Princesa Isabel 1E',
            numero: '1E',
            dono:'Iago Sousa'
        }
    },
    condutores:[{
        //Array de objetos 
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        console.log('Carro')
    }   
}

console.log(carro);
carro.proprietario.endereco.numero = 1000
console.log(carro);
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'
// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro.condutores);
console.log(carro.condutores.length);