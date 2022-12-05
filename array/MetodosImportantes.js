//*Funções interessantes do Array
//Dentro desse exercicio, n pode atribuir algo para piloto pois ta numa constante. Pode mexer no Array!
const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
//Metodo remove ultimo elemento do array
pilotos.pop()//Massa quebrou o carro dnv
console.log(pilotos);

//Adicionar um novo elemento no Array
pilotos.push('Verstappen')
console.log(pilotos);

//Metodo que remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos);

//Metodo adiciona o primeiro elemento no array
pilotos.unshift('Hamilton')
console.log(pilotos);

//*Splice pode adicionar ou remover elementos

//Adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos);

//Remover
pilotos.splice(3,1,'Iago')
console.log(pilotos);

//Metodo Slice = Retorna um novo array
const algunsPilotos1 = pilotos.slice(2)//novo array, pegando do array pilotos do indice 2 até o final
console.log(algunsPilotos1);

//*Slice é vc pegar uma parte do array
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);