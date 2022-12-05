class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//extends usando para fazer relações de prototipos
class Pai extends Avo{//forma para definir que uma classe tem outra classe como prototipo
    constructor(sobrenome, profissao = 'Professor'){
//*Super é utilizado para chamar a constructor da classe Pai
        super(sobrenome)
        this.profissao = profissao

    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho);