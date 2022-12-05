//*ForEach = forma de vc percorrer um array e deixa o trabalho para ser feito pelo dev
//Nesse caso pede para criar um forEach2 usando um prottype
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome,indice, array){
  console.log(`${indice + 1}) ${nome}`);
})

