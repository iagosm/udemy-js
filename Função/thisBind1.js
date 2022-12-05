//This e a Função Bind
//O que é o bind? é o metodo responsavel por amarrar o objeto para ele ser o dono da execução daquele objeto.Quando chamar ra função, sempre q referenciar o this, o this será a função bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
        //Se tirar o This e deixar apenas o saudação, irá dar um erro dizendo que saudação não foi definido
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()//Conflito entre paradigmas: funcional e 00.

//Nesse caso utilizamos o .Bind() para puxar a const pessoa e não precisar reutilizar o this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()