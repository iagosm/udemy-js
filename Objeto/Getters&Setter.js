//Tenicas para encapsulamento em um codigo. Colocando atributos privados e ter metodos que alteral e leem de forma controlada.
//Getters e Setters são funções que dentro os valores são acessados.Qual a vantagem de acessar um valor em cima de uma função? 
const sequencia = {
    _valor: 1, //convenção. é uma variavel que é pretendida a ser acessada internamente do objeto
    //Qual a vantagem de acessar atributos dentro de uma função?
    //Resposta = Vantagem que vc pode fazer algum tipo de validação ou processamento antes de devolver o valor da variavel
    get valor(){ return this._valor++},
    set valor(valor ){ 
        if (valor > this._valor) {
            this._valor = valor
        }

    }
}

//*Como faz para acessar a parte do getters e setters?
console.log(sequencia.valor,sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900 // Como esse é um valor inferior ao valor dado anteriormente, ele apenas ignora e acrescenta o this._valor++
console.log(sequencia.valor, sequencia.valor);