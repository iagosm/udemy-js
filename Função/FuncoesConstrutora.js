//Class é uma forma diferente de escrever uma função em JavaScript
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado, pertence apenas ao corpo dessa função
    let velocidadeAtual = 0
    //metodo publico apartir da palavra reservada this
    //This é responsavel por tornar algo visivel para fora da function
    this.acelerar = function(){
        //Responsavel por acrescentar uma velocidade atual. Visivel apenas na função
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
 
    //metodo publico. Responsavel por pegar a velocidade atual
    //Para deixar como privado, teria q colocar como let ou const
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,20)
//o 20 seria o numero de vezes q ele acelerou(delta). abaixo demos acelerar 3x então = 60
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());


const renaut = new Carro(210,60)
renaut.acelerar()
renaut.acelerar()
renaut.acelerar()
console.log(renaut.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
console.log(typeof renaut );