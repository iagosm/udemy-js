function Pessoa(nome){
        this.nome = nome
    
    this.falar = function() {
        //this.falar = This é necessario na factory mas n é necessario na class
        //se executar sem o this, iria dar erro dizendo que o nome não foi definido
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Iago')
p1.falar()
console.log(p1.nome);


