// This pode variar de acordo com o que estamos chamando
function Pessoa(){
    this.idade = 0 
    const self = this
    //SetInterval dispara uma outra função apartir de um determinado intervalo. Passar uma função como parametro para outra função
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa