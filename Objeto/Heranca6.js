//Simulação quando vc usa o operador new para instanciar um objeto apartir de um operador new
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID   
}


//O que acontece quando usa o operador NEW?
//Usa para criar um novo objeto e o prototipo desse objeto criado vai apontar para a função AULA.
const aula1 = new Aula('Bem Vindo!', 123)
const aula2 = new Aula('Até Breve',456)
console.log(aula1,aula2);

//simulando o new
function novo(f, ...params){
    const obj = {} //criou um OBJETO novo com anotação literal
    obj.__proto__ = f.prototype //Associei o prototipo desse objeto ao prototype
    f.apply(obj,params) //Executar a função F, passando o Objeto e os parametros
    return obj // Aqui returna o obj criado
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)