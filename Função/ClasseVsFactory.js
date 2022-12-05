//Classe é uma forma diferente de se construir uma função em javascript
//classe tem atributos e comportamentos

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        //se executar sem o this, iria dar erro dizendo que o nome não foi definido
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome =>{
    return {
        //não precisa usar o this nesse contexto.
        //Ele tem ciencia que não é preciso do this.
        falar: () => console.log(`Meu nome é ${nome}, Prazer!`)
    }
}

const p2 = criarPessoa('Iago Sousa')
p2.falar()